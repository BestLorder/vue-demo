<!--
 * @Descripttion: 
 * @Author: Lorder
 * @Date: 2019-12-05 16:21:22
 * @LastEditors: Lorder
 * @LastEditTime: 2020-01-17 20:13:04
 -->
<template>
  <mu-container
    data-mu-loading-color="secondary"
    data-mu-loading-overlay-color="rgba(0, 0, 0, .7)"
    v-loading="loading"
    class="page"
  >
    <div class="home">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <Son msg="Welcome to Your Vue.js App" a="aaa" b="bbb" @into="into" />
    </div>
    <mu-alert color="error">
      this is error alert 666
    </mu-alert>
  </mu-container>
</template>

<script>
// @ is an alias to /src
import Son from "@/components/Son.vue";
import { addMoreParams } from "@/mixins/mixins";
export default {
  name: "home",
  components: {
    Son
  },
  mixins: [addMoreParams],
  data() {
    return {
      loading: false
    };
  },
  provide: {
    data: "I am parent.vue"
  },
  created() {
    // this.$myLoading(true);
    // setTimeout(() => {
    //   this.$myLoading(false);
    // }, 3000);
    console.log(process.env.VUE_APP_ENV);
    console.log(this.getOtherInfo());
    // this.myLoading(true);
    // this.$router.push({ name: "about", params: { name: "aa", age: 17 } });
    // this.$router.push({ name: "about", query: { name: "aa", age: 17 } });
  },
  methods: {
    into() {
      console.log("in");
    }
  }
};
</script>

<style lang="less">
.page {
  // min-height: 100vh;
  // background: #ededed;
}
</style>
