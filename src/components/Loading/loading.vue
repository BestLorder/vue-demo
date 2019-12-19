<template>
  <mu-container class="login-wrapper" v-if="show">
    <div class="logo">
      <!-- <img src="../../assets/img/logo1.png" alt="" /> -->
      myLoading
    </div>
    <div
      class="content"
      v-loading="loading"
      data-mu-loading-size="34"
      data-mu-loading-overlay-color="rgba(0, 0, 0, 0)"
      data-mu-loading-color="#ccc"
    ></div>
  </mu-container>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      show: false,
      loading: true
    };
  },
  created() {}
};
</script>

<style scoped lang="less">
.login-wrapper {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 100;
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 2rem;
      width: 4rem;
    }
  }

  .content {
    position: relative;
    margin-top: 2.5rem;
    height: 200px;
  }
}
</style>
