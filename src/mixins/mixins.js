//页面特殊参数
export const addMoreParams = {
  methods: {
    getOtherInfo() {
      let obj = {};
      Object.keys(this.$route.query).forEach(key => {
        if (this.$route.query[key]) {
          obj[key] = this.$route.query[key];
        }
      });
      return obj;
    }
  }
};
