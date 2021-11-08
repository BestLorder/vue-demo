<template>
  <div class="box">
    <whiteboard ref="child" :delayTime="delayTime" :groupId="groupId" />
    <div class="main">
      <div class="player pause">
        <video
          id="video"
          x5-playsinline="true"
          playsinline="true"
          webkit-playsinline="true"
          autoplay="autoplay"
        ></video>
        <em class="btn"></em>
        <span class="state">正在直播</span>
      </div>
      <div class="listBox">
        <div v-for="item in messageList" :key="item.ID" class="list">
          <div>{{ item.time | capitalize }}</div>
          <div>
            {{ item.from }}:{{
              item.type === type ? item.payload.text : item.payload.data
            }}
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <el-input v-model="sendContent" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="send">发送</el-button>
    </div>
    <!-- <el-dialog
      title="登录"
      :visible.sync="dialogVisible"
      width="80%"
      :show-close="false"
    >
      <el-input v-model="userID" placeholder="请输入userID"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
import whiteboard from "@/components/whiteboard/whiteboard.vue";
import moment from "moment";
export default {
  components: {
    whiteboard,
  },
  filters: {
    capitalize: function(time) {
      if (!time) return "";
      console.log(time);
      console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
      return moment(time * 1000).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  data() {
    return {
      key: 123,
      userID: "user" + new Date().getTime(),
      // userID: "yzl",
      form: {
        userID: "user1",
      },
      messageList: "",
      type: TIM.TYPES.MSG_TEXT,
      sendContent: "",
      dialogVisible: true,
      delayTime: 7.5,
      pathArr: [],
      groupId: "1234",
    };
  },
  mounted() {
    // const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    // if (isiOS) {
    //   this.$router.replace({ name: "play" });
    //   return;
    // }
    this.init();
    this.login();
  },
  destroyed() {
    this.logout();
  },
  methods: {
    init() {
      var Hls = window.Hls;
      var video = document.querySelector("video");
      var btn = document.querySelector(".btn");
      var player = document.querySelector(".player");
      setTimeout(() => {
        video.setAttribute("x5-video-player-type", "h5-page");
        video.play();
      }, 500);

      // var url =
      // "https://hls.talk-fun.com/live/0_192441_1089283_0/playlist.m3u8?wsSession=3e46fc1e021049aecc9a45b1-159523858572105&wsIPSercert=2d522e34f6c8f34ffd04310021c6d297&wsMonitor=0";
      var url =
        "http://pull.kakahui.net/live/1400397853_1234_administrator_main.m3u8";
      // var url = "http://localhost:8000/live/guotingjie/index.m3u8";
      // var url =
      //   "https://devstreaming-cdn.apple.com/videos/tutorials/App_Store_Connect_Basics/hls_vod_mvp.m3u8";
      console.log("Hls.isSupported()");
      console.log(Hls.isSupported());
      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
          video.play();
        });
        // var cur_url = null;
        hls.on(Hls.Events.FRAG_CHANGED, function(event, data) {
          // console.log(Date.now()/1000);
          //   console.log(event, data);
          try {
            let cur_url = data.frag.relurl;
            userDatas.map((item, index) => {
              if (item.relurl === cur_url) {
                let dataArr = item.data.samples;
                dataArr
                  // .filter((item, index) => {
                  //   console.log('filter'+index)
                  //   return dataArr.indexOf(item, 0) === index;
                  // })
                  .map((item) => {
                    let userData = JSON.parse(item.userData);
                    console.log(Date.now());
                    console.log("延迟时间：");
                    console.log((Date.now() - userData.timestamp) / 1000);
                    this.delayTime = (Date.now() - userData.timestamp) / 1000;
                    // if (userData.type === 1) {
                    //   console.log("sei-ppt消息");
                    //   console.log(userData);
                    //   this.$refs.child.changePage(
                    //     userData.pptData,
                    //     userData.timestamp
                    //   );
                    // } else {
                    //   console.log("sei-画板消息");
                    //   console.log(userData);
                    //   this.pathArr.map((item, index) => {
                    //     if (userData.timestamp === item.timestamp) {
                    //       this.$refs.child.drawPath(item.path);
                    //       this.pathArr.splice(index, 1);
                    //     }
                    //   });
                    // }
                  });

                userDatas.splice(index, 1);
              }
            });
          } catch (error) {
            console.log(error);
          }
        });
        // hls.on(Hls.Events.FRAG_PARSED, function (event, data) {
        //   console.log(data);
        // });
        var userDatas = [];
        hls.on(Hls.Events.FRAG_PARSING_USERDATA, function(event, data) {
          console.log(Date.now());
          userDatas.push({
            relurl: data.frag.relurl,
            data: data,
          });
          console.log(event, data);
        });

        // setInterval(() => {
        //   for (var i = 0; i < userDatas.length; i++) {
        //     if (userDatas[i].relurl === cur_url) {
        //       let dataArr = userDatas[i].data.samples;
        //       dataArr
        //         // .filter((item, index) => {
        //         //   console.log('filter'+index)
        //         //   return dataArr.indexOf(item, 0) === index;
        //         // })
        //         .map((item) => {
        //           let userData = JSON.parse(item.userData);
        //           console.log(Date.now());
        //           console.log("延迟时间：");
        //           console.log((Date.now() - userData.timestamp) / 1000);
        //           this.delayTime=(Date.now() - userData.timestamp) / 1000
        //           // if (userData.type === 1) {
        //           //   console.log("sei-ppt消息");
        //           //   console.log(userData);
        //           //   this.$refs.child.changePage(
        //           //     userData.pptData,
        //           //     userData.timestamp
        //           //   );
        //           // } else {
        //           //   console.log("sei-画板消息");
        //           //   console.log(userData);
        //           //   this.pathArr.map((item, index) => {
        //           //     if (userData.timestamp === item.timestamp) {
        //           //       this.$refs.child.drawPath(item.path);
        //           //       this.pathArr.splice(index, 1);
        //           //     }
        //           //   });
        //           // }
        //         });

        //       userDatas.splice(i, 1);
        //       break;
        //     }
        //   }
        // }, 500);
        // hls.on(Hls.Events.FRAG_PARSING_METADATA, function (event, data) {
        //   console.log(data);
        // });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = url;
        video.addEventListener("canplay", function() {
          // video.play()
        });
      }

      btn.addEventListener("click", function() {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });

      video.addEventListener("click", function() {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });

      video.addEventListener("play", function() {
        player.className = "player";
      });

      video.addEventListener("pause", function() {
        player.className = "player pause";
      });
    },
    logout() {
      let promise = this.tim.logout();
      promise
        .then(function(imResponse) {
          console.log(imResponse.data); // 登出成功
        })
        .catch(function(imError) {
          console.warn("logout error:", imError);
        });
    },
    login() {
      this.tim
        .login({
          userID: this.userID,
          userSig: window.genTestUserSig(this.userID).userSig,
        })
        .then(() => {
          console.log("success");
          setTimeout(() => {
            this.joinGroup();
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    confirm() {
      this.dialogVisible = false;
      this.login();
    },
    onMessageReceived() {
      let onMessageReceived = (event) => {
        // 收到推送的单聊、群聊、群提示、群系统通知的新消息，可通过遍历 event.data 获取消息列表数据并渲染到页面
        // event.name - TIM.EVENT.MESSAGE_RECEIVED
        // event.data - 存储 Message 对象的数组 - [Message]

        event.data.map((item) => {
          if (item.type === TIM.TYPES.MSG_TEXT) {
            // 文本消息
            console.log("文本消息");
            console.log(event);
            this.messageList = [...this.messageList, item];
          } else {
            // 自定义消息
            let data = JSON.parse(item.payload.data);

            if (data.type === 1) {
              // this.pathArr = [];
              setTimeout(() => {
                console.log("IM-ppt消息");
                console.log(data.pptData);
                this.$refs.child.changePage(data.pptData);
              }, this.delayTime * 1000);
              // this.delayTime * 1000
              // console.log(data.path);
              // this.$refs.child.showPath(data.path);
            } else {
              // console.log("IM画板消息");
              // console.log(data);
              // this.pathArr.push(data);
              // console.log("存储得IM画板消息");
              // console.log(this.pathArr);
              setTimeout(() => {
                console.log("IM-画板消息");
                console.log(data.path);
                this.$refs.child.drawPath(data.path);
              }, this.delayTime * 1000);
            }
          }
        });
      };
      this.tim.on(TIM.EVENT.MESSAGE_RECEIVED, onMessageReceived);
    },
    createTextMessage() {
      // 1. 创建消息实例，接口返回的实例可以上屏
      console.log(TIM.TYPES.CONV_GROUP);
      let message = this.tim.createTextMessage({
        to: this.groupId,
        conversationType: TIM.TYPES.CONV_GROUP,
        // 消息优先级，用于群聊（v2.4.2起支持）。如果某个群的消息超过了频率限制，后台会优先下发高优先级的消息，详细请参考：https://cloud.tencent.com/document/product/269/3663#.E6.B6.88.E6.81.AF.E4.BC.98.E5.85.88.E7.BA.A7.E4.B8.8E.E9.A2.91.E7.8E.87.E6.8E.A7.E5.88.B6)
        // 支持的枚举值：TIM.TYPES.MSG_PRIORITY_HIGH, TIM.TYPES.MSG_PRIORITY_NORMAL（默认）, TIM.TYPES.MSG_PRIORITY_LOW, TIM.TYPES.MSG_PRIORITY_LOWEST
        // priority: TIM.TYPES.MSG_PRIORITY_NORMAL,
        payload: {
          text: this.sendContent,
        },
      });
      console.log("message");
      console.log(message);
      // 2. 发送消息
      let promise = this.tim.sendMessage(message);
      promise
        .then((imResponse) => {
          // 发送成功
          console.log("发送成功");
          console.log(imResponse);
        })
        .catch(function(imError) {
          // 发送失败
          console.log("发送失败");
          console.warn("sendMessage error:", imError);
        });
    },
    joinGroup() {
      let promise = this.tim.joinGroup({
        groupID: "1234",
        type: TIM.TYPES.GRP_AVCHATROOM,
      });
      promise
        .then((imResponse) => {
          switch (imResponse.data.status) {
            case TIM.TYPES.JOIN_STATUS_WAIT_APPROVAL: // 等待管理员同意
              break;
            case TIM.TYPES.JOIN_STATUS_SUCCESS: // 加群成功
              console.log("加群成功");
              console.log(imResponse.data.group); // 加入的群组资料
              break;
            case TIM.TYPES.JOIN_STATUS_ALREADY_IN_GROUP: // 已经在群中
              break;
            default:
              break;
          }
          console.log(imResponse.data.status);
          // this.createTextMessage();
          // this.getMessageList();
          this.onMessageReceived();
        })
        .catch(function(imError) {
          console.warn("joinGroup error:", imError); // 申请加群失败的相关信息
        });
    },
    getMessageList() {
      // 打开某个会话时，第一次拉取消息列表
      let promise = this.tim.getMessageList({
        conversationID: "GROUP" + this.groupId,
        count: 5,
      });
      promise.then((imResponse) => {
        console.log("获取消息成功");
        this.messageList = imResponse.data.messageList; // 消息列表。
        // const nextReqMessageID = imResponse.data.nextReqMessageID; // 用于续拉，分页续拉时需传入该字段。
        // const isCompleted = imResponse.data.isCompleted; // 表示是否已经拉完所有消息。
      });
    },
    getVideo() {
      var player = new TcPlayer("id_test_video", {
        m3u8: "http://pull.kakahui.net/live/1400397853_1234_007_main.m3u8", //请替换成实际可用的播放地址
        // flv:'http://live.gaoang.xin/live/1400395272_123456_74110_main.flv',
        //   rtmp:'rtmp://live.gaoang.xin/live/start99',
        autoplay: true, //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
        poster: "http://www.test.com/myimage.jpg",
        // width: document.body.clientWidth, //视频的显示宽度，请尽量使用视频分辨率宽度
        // height: 'auto', //视频的显示高度，请尽量使用视频分辨率高度,
        width: "480", //视频的显示宽度，请尽量使用视频分辨率宽度
        height: "320", //视频的显示高度，请尽量使用视频分辨率高度
        live: true,
        // controls:'none',
        x5_player: true,
        x5_type: "h5",
      });
    },
    getPpt() {
      var playerPpt = new TcPlayer("id_test_video", {
        m3u8: "http://pull.kakahui.net/live/1400397853_7_007_aux.m3u8", //请替换成实际可用的播放地址
        // flv:'http://live.gaoang.xin/live/1400395272_123456_74110_main.flv',
        //   rtmp:'rtmp://live.gaoang.xin/live/start99',
        autoplay: true, //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
        poster: "http://www.test.com/myimage.jpg",
        width: "480", //视频的显示宽度，请尽量使用视频分辨率宽度
        height: "320", //视频的显示高度，请尽量使用视频分辨率高度
      });
    },
    creatCanvas() {
      var canvasList = document.getElementById("lineArea");
      var canvas = document.createElement("canvas");
      canvas.width = 375; //☜
      canvas.height = 200;
      canvas.style.backgroundColor = "#FF0000";
      console.log("creatCanvas");
      console.log(canvas);
      canvasList.appendChild(canvas);
    },
    addImg() {
      var canvas = document.querySelector("canvas");
      var v = document.querySelector("#id_test_video video");
      var ctx = canvas.getContext("2d");
      console.log("addImg");
      console.log(ctx);
      // 加载图片
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 200, 200);
      };
      img.src =
        "https://qnunion.feierlaiedu.com/kcschool/202006191501092_header.png";
    },
    addVideo() {
      var canvas = document.querySelector("canvas");
      var v = document.querySelector("#id_test_video video");
      console.log(canvas);
      var ctx = canvas.getContext("2d");
      console.log(ctx);
      v.addEventListener(
        "play",
        () => {
          console.log(11111111111111111111);
          var i = window.setInterval(() => {
            console.log(ctx);
            ctx.drawImage(v, 0, 0, 270, 135);
            // console.log(v.currentTime);
          }, 20);
        },
        false
      );
    },
    go() {
      var canvas = document.querySelector("canvas");
      var v = document.querySelector("#id_test_video video");
      var ctx = canvas.getContext("2d");
      console.log("v");
      console.log(v);
      console.log(v.src);
      ctx.drawImage(v, 0, 0, 270, 135);
    },
    send() {
      this.createTextMessage();
      this.localInsert();
    },
    localInsert() {
      let item = {
        type: this.type,
        time: Math.round(new Date() / 1000),
        from: this.userID,
        payload: { text: this.sendContent },
      };
      console.log(new Date() / 1000);
      this.messageList = [...this.messageList, item];
      this.sendContent = "";
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  word-break: break-all;
  padding-bottom: 50px;
}
canvas {
  background: black;
}
.main {
  position: relative;
}
.listBox {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  // background: #409EFF;
  color: #409eff;
  .list {
    padding: 5px;
  }
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
}

.player {
  // width: 480px;
  // height: 320px;
  position: relative;
}
.player video {
  width: 100%;
  height: 100%;
}
.player .btn {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -35px auto auto -35px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.5);
  line-height: 40px;
}
.player .btn:hover {
  background: rgba(255, 255, 255, 0.7);
}
.player .btn:before {
  border: 20px solid #ddd;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-right-color: transparent;
  content: " ";
  display: block;
  margin-left: 10px;
  width: 0;
  height: 0;
}
.player .btn:before:hover {
  border-left-color: #fff;
}

.player.pause .btn {
  display: block;
}

.player .state {
  position: absolute;
  bottom: 20px;
  left: 40px;
  font-size: 14px;
  color: #000;
}
.player.pause .state {
  display: none;
}
</style>
