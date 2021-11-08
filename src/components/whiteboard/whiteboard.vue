<template>
  <div class="demo">
    <div class="rtcBox">
      <!-- <div>
        <canvas ref="canvas"></canvas>
        <h5>白板操作666</h5>
      </div> -->
      <div class="canvasBox">
        <canvas
          :width="canvasWidth"
          :height="canvasHeight"
          ref="canvas1"
        ></canvas>
      </div>
      <!-- <div>
                <video src="" id="rtcB" playsinline autoplay></video>
                <h5>演示画面</h5>
                <button @click="call" :disabled="allowCall">call</button>
                <button @click="hangup" :disabled="allowHangup">hangup</button>
            </div> -->
    </div>
  </div>
</template>

<script>
import { Palette } from "@/utils/palette";
export default {
  name: "whiteboard",
  props: {
    delayTime: {
      require,
    },
    groupId: {
      require,
    },
  },
  data() {
    return {
      peerA: null,
      peerB: null,
      offerOption: {
        offerToReceiveAudio: 1,
        offerToReceiveVideo: 1,
      },
      allowCall: true,
      allowHangup: true,
      handleList: [
        { name: "圆", type: "arc" },
        { name: "线条", type: "line" },
        { name: "矩形", type: "rect" },
        { name: "多边形", type: "polygon" },
        { name: "橡皮擦", type: "eraser" },
        { name: "撤回", type: "cancel" },
        { name: "前进", type: "go" },
        { name: "清屏", type: "clear" },
        { name: "线宽", type: "lineWidth" },
        { name: "颜色", type: "color" },
      ],
      color: "rgba(19, 206, 102, 1)",
      currHandle: "line",
      lineWidth: 5,
      palette: null, // 画板
      paletteB: null,
      allowCancel: true,
      allowGo: true,
      sides: 3,
      ratio: 1,
      canvasWidth: document.body.clientWidth,
      canvasHeight: 432 * (document.body.clientWidth / 768),
    };
  },
  mounted() {
    this.initPalette(); // 初始化画板
    // this.getInitData(); //获取前15s内数据
    this.getPath() //获取最新数据
  },
  methods: {
    getInitData() {
      this.$axios
        .get(
          // "http://192.168.17.238:18091/cloudlive/chatroom/loadPttDataRecent",
          "https://testlw.kakahui.net/cloudlive/chatroom/loadPttDataRecent",
          {
            params: {
              groupId: this.groupId,
            },
          }
        )
        .then((res) => {
          console.log("数据是:", res.data);
          res = res.data;
          if (res.code === 0) {
            let pptDataArr = res.data.pptData;
            pptDataArr.map((item, index) => {
              let pptData = JSON.parse(item);
              let pathArr = res.data.path[pptData.num];
              let delayTime =
                pptData.time - (Math.round(new Date() / 1000) - this.delayTime);
              console.log(
                pptData.time - (Math.round(new Date() / 1000) - this.delayTime)
              );
              if (index === 0) {
                console.log("初始化pptData");
                console.log(pptData);
                this.initaData(pptData, pathArr);
              } else {
                console.log("初始化切换pptData");
                console.log(pptData);
                setTimeout(() => {
                  this.clear();
                  this.initaData(pptData, pathArr);
                }, delayTime * 1000);
              }
            });
          }
        })
        .catch((e) => {
          console.log("getInitData获取数据失败");
        });
    },
    initaData(pptData, pathArr) {
      this.addPpt(pptData);
      pathArr.map((item) => {
        let path = JSON.parse(item);
        this.showPath(path);
      });
    },
    getPath(num = "",timestamp) {
      this.$axios
        .get("https://testlw.kakahui.net/cloudlive/chatroom/loadPttData", {
          params: {
            groupId: this.groupId,
            page: num,
          },
        })
        .then((res) => {
          console.log("数据是:", res.data);
          res = res.data;
          if (res.code === 0) {
            if (!num) {
              let pptData = JSON.parse(res.data.pptData);
              console.log("初始化pptData");
              console.log(pptData);
              this.addPpt(pptData);
            }
            console.log("获取的pathArr");
            let pathArr = res.data.path;
            // 获取当前页历史画笔
            pathArr.map((item) => {
              let path = JSON.parse(item);
              this.showPath(path);
            });
          }
        })
        .catch((e) => {
          console.log("getPath获取数据失败");
        });
    },
    initPalette() {
      // this.palette = new Palette(this.$refs["canvas"], {
      //   drawColor: this.color,
      //   drawType: this.currHandle,
      //   lineWidth: this.lineWidth,
      //   allowCallback: this.allowCallback,
      //   moveCallback: this.moveCallback,
      // });
      this.paletteB = new Palette(this.$refs["canvas1"], {
        drawColor: this.color,
        drawType: this.currHandle,
        lineWidth: this.lineWidth,
      });
      // const pptData = {
      //   id: 1,
      //   imgSrc:
      //     "https://qnunion.feierlaiedu.com/kcschool/202007141953118_1.jpg",
      //   num: 1,
      // };
      // this.addPpt(pptData);
    },
    // moveCallback(...arr) {
    //   // 同步到对方
    //   console.log("moveCallback", arr);
    //   // this.send(arr);
    //   if (Array.isArray(arr)) {
    //     // console.log('onmessage', arr);
    //     let [type, ...res] = arr;
    //     // console.log('onmessage', type, res);
    //     this.paletteB[type](...res);
    //   }
    // },
    showPath(path) {
      path.map((item) => {
        // console.log(item);
        this.moveCallback(item);
      });
    },
    drawPath(path) {
      path.map((item, index) => {
        // console.log(item);
        setTimeout(() => {
          this.moveCallback(item);
        }, 20 * index);
      });
    },
    moveCallback(arr) {
      // 同步到对方
      // console.log("moveCallback", arr);
      // this.send(arr);
      if (Array.isArray(arr)) {
        let [type, ...res] = arr;
        this.paletteB[type](...res);
      }
    },
    getRatio() {
      console.log(document.body.clientWidth);
      console.log(window.screen.width);
      this.ratio = document.body.clientWidth / 768;
    },
    addPpt(ppt) {
      const canvas = this.$refs["canvas1"];
      canvas.style.backgroundImage = "url(" + ppt.imgSrc + ")";
    },
    changePage(ppt,timestamp) {
      this.addPpt(ppt);
      this.clear();
      // this.getPath(ppt.num,timestamp);
    },
    clear() {
      this.paletteB["clear"]();
    },
    allowCallback(cancel, go) {
      this.allowCancel = !cancel;
      this.allowGo = !go;
    },
    sidesChange() {
      this.palette.changeWay({ sides: this.sides });
    },
    colorChange() {
      this.palette.changeWay({ color: this.color });
    },
    lineWidthChange() {
      this.palette.changeWay({ lineWidth: this.lineWidth });
    },
    handleClick(v) {
      console.log("handleClick");
      if (["cancel", "go", "clear"].includes(v.type)) {
        this.moveCallback(v.type);
        this.palette[v.type]();
        return;
      }
      this.palette.changeWay({ type: v.type });
      if (["color", "lineWidth"].includes(v.type)) return;
      this.currHandle = v.type;
    },
    start() {
      this.state = "2";
      this.newRecognition.start();
    },
    stop() {
      this.state = "1";
      this.newRecognition.stop();
    },
    async call() {
      // if (!this.peerA || !this.peerB) { // 判断是否有对应实例，没有就重新创建
      //     this.initPeer();
      // }
      try {
        let offer = await this.peerB.createOffer(this.offerOption); // 创建 offer
        await this.onCreateOffer(offer);
      } catch (e) {
        console.log("createOffer: ", e);
      }

      this.allowCall = true;
      this.allowHangup = false;
    },
    hangup() {
      this.peerA.close();
      this.peerB.close();
      this.peerA = null;
      this.peerB = null;
      this.allowCall = false;
      this.allowHangup = true;
      this.palette.destroy();
      this.palette = null;
    },
    async onCreateOffer(desc) {
      try {
        await this.peerB.setLocalDescription(desc); // 呼叫端设置本地 offer 描述
      } catch (e) {
        console.log("Offer-setLocalDescription: ", e);
      }
      try {
        await this.peerA.setRemoteDescription(desc); // 接收端设置远程 offer 描述
      } catch (e) {
        console.log("Offer-setRemoteDescription: ", e);
      }
      try {
        let answer = await this.peerA.createAnswer(); // 接收端创建 answer
        await this.onCreateAnswer(answer);
      } catch (e) {
        console.log("createAnswer: ", e);
      }
    },
    async onCreateAnswer(desc) {
      try {
        await this.peerA.setLocalDescription(desc); // 接收端设置本地 answer 描述
      } catch (e) {
        console.log("answer-setLocalDescription: ", e);
      }
      try {
        await this.peerB.setRemoteDescription(desc); // 呼叫端设置远程 answer 描述
      } catch (e) {
        console.log("answer-setRemoteDescription: ", e);
      }
    },
    initPeer() {
      // 创建输出端 PeerConnection
      console.log("创建输出端 PeerConnection");
      let PeerConnection =
        window.RTCPeerConnection ||
        window.mozRTCPeerConnection ||
        window.webkitRTCPeerConnection;
      console.log(PeerConnection);
      this.peerA = new PeerConnection();
      this.peerA.addStream(this.localstream); // 添加本地流
      // 监听 A 的ICE候选信息
      // 如果收集到，就添加给 B
      this.peerA.onicecandidate = (event) => {
        if (event.candidate) {
          console.log("如果收集到，就添加给 B");
          console.log(event.candidate);
          this.peerB.addIceCandidate(event.candidate);
        }
      };
      // 创建呼叫端
      this.peerB = new PeerConnection();
      this.peerB.onaddstream = (event) => {
        // 监听是否有媒体流接入，如果有就赋值给 rtcB 的 src
        console.log("event-stream", event.stream);
        let video = document.querySelector("#rtcB");
        video.srcObject = event.stream;
        this.initPalette(); // 初始化画板
      };
      // 监听 B 的ICE候选信息
      // 如果收集到，就添加给 A
      this.peerB.onicecandidate = (event) => {
        if (event.candidate) {
          console.log("如果收集到，就添加给 A");
          console.log(event.candidate);
          this.peerA.addIceCandidate(event.candidate);
        }
      };
      // this.allowCall = false;
    },
    async createMedia() {
      // 保存本地流到全局
      this.localstream = this.$refs["canvas"].captureStream();
      console.log("localstream");
      console.log(this.localstream);
      this.initPeer(); // 获取到媒体流后，调用函数初始化 RTCPeerConnection
    },
  },
};
</script>

<style lang="less" scoped>
.rtcBox {
  // display: flex;
  // justify-content: center;
  .canvasBox {
    width: 100%;
    height: auto;
  }
  canvas {
    position: relative;
    // border: 1px solid #000;
    // width: 512px;
    // height: 288px;
    // background: #fff url(https://qnunion.feierlaiedu.com/kcschool/202006191501092_header.png);
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    // transform: scale(0.5);
  }
  ul {
    text-align: left;
  }
}
</style>
