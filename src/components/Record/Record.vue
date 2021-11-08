<template>
  <div></div>
</template>

<script>
import { record } from "rrweb";
import axios from "axios";
export default {
  name: "Record",
  // props: {
  //   id: String,
  // },
  data() {
    return {
      events: [],
      // session: this.id + new Date().getTime(),
      // session: this.id,
      stopFn: null,
    };
  },
  mounted() {
    let that = this;
    that.stopFn = record({
      emit(event) {
        console.log("events.push");
        // console.log(event);

        that.events.push(event);
      },
    });
  },
  methods: {
    submit(id) {
      console.log("submit");
      this.stopFn();
      const params = {
        height: window.innerHeight,
        width: window.innerWidth,
        done: true,
      };
      axios
        .post(
          `http://39.101.128.244:3001/api/tracks/${id}`,
          // `http://192.168.19.169:18091/insurance/api/policy/track/replay?sessionId=${this.session}`,
          // `https://testicwa.kakahui.net/insurance/api/policy/track/replay?sessionId=${this.session}`,
          {
            // data: {
            //   applicant_name: "测试",
            //   applicant_gender: "男",
            //   comment: "备注信息",
            // },
            events: this.events,
          },
          {
            params: params,
          }
        )
        .then((res) => {
          console.log(res);
          this.events = [];
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="less" scoped></style>
