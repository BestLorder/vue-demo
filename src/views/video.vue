<template>
  <div>
    <video
      id="myvideo"
      width="960"
      height="540"
      class="video-js vjs-default-skin"
      controls
    >
      <!-- hls直播源地址：CCTV1高清 -->
      <source
        src="https://qnunion.feierlaiedu.com/1260635-1597306902829-playback.mp4"
      />
    </video>
  </div>
</template>

<script>
// import Hls from 'hls.js'
export default {
  data() {
    return {
      key: "123",
    };
  },
  mounted() {
    // console.log(Hls.isSupported())

    var player = videojs("myvideo", { liveui: true }, function() {
      console.log("videojs播放器初始化成功");
    });
    player.play();
    player.on("ended", function() {
      console.log("视频播放结束");
    });

    player.on("pause", function() {
      console.log("点击暂停");
    });

    player.on("play", function() {
      console.log("点击播放");
    });
    player.on("timeupdate", function() {
      console.log("视频播放中");
      console.log(player.currentTime());
    });

    console.log(player);
    // Get the current player's VideoTrackList object.
    var videoTrackList = player.videoTracks();
    console.log(videoTrackList);
    console.log("liveTracker" + player.liveTracker);
    console.log(player.events);
    player.on("playing", function() {
      // 每次画面开始播放或是恢复播放都会执行
      console.log("≈");
      //   that.playing()
    });
  },
};
</script>

<style lang="scss" scoped></style>
