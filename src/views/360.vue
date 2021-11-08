<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: 360,
    };
  },
  mounted() {
    window.qhwwPlayer = new window.QhwwPlayer({
      isLive: true,
      isHLS: true,
      sei:1,
      container: "#container",
      src:
        "http://pull.kakahui.net/live/1400397853_1234_administrator_main.m3u8",
    });
    // window.qhwwPlayer.on("timeupdate", (event) => {
    //   console.log(event);
    // });
    window.qhwwPlayer.on("seiUpdate", (event) => {
      console.log('seiUpdate');
      console.log(event);
    });
  },
};
</script>

<style lang="scss" scoped></style>
