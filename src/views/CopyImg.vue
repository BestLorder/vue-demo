<template>
  <div>
    <!-- <div id="copy" class="btn">
      复制
    </div> -->
    <div class="copy-text" id="foo">
      放你要复制的图片或者文字
      <img alt="Vue logo" src="//www.baidu.com/img/bd_logo1.png" />
    </div>
    <!-- Target -->
    <!-- <input id="foo" value="https://github.com/zenorocha/clipboard.js.git" /> -->

    <!-- Trigger -->
    <button class="btn" data-clipboard-target="#foo">
      点击复制
    </button>
  </div>
</template>

<script>
import Clipboard from "clipboard";
export default {
  data() {
    return {};
  },
  mounted() {
    var clipboard = new Clipboard(".btn");
    console.log(clipboard);
    //成功回调
    clipboard.on("success", function(e) {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);
      e.clearSelection();
    });
    //失败回调
    clipboard.on("error", function(e) {
      console.error("Action:", e.action);
      console.error("Trigger:", e.trigger);
    });
  }
};
</script>

<style lang="less" scoped></style>
