<template>
  <div>
    <!-- <div class="home">
      <Son msg="Welcome to Your Vue.js App" a="aaa" b="bbb" @into="into" />
    </div> -->
    <mu-paper :z-depth="1" class="demo-list-wrap">
      <mu-appbar color="primary">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        Inbox
      </mu-appbar>
      <mu-list toggle-nested>
        <mu-list-item
          button
          :ripple="false"
          nested
          :open="open === 'send'"
          @toggle-nested="open = arguments[0] ? 'send' : ''"
        >
          <mu-list-item-action>
            <mu-icon value="send"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Sent mail</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon
              class="toggle-icon"
              size="24"
              value="keyboard_arrow_down"
            ></mu-icon>
          </mu-list-item-action>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 3</mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item
          button
          :ripple="false"
          nested
          :open="open === 'drafts'"
          @toggle-nested="open = arguments[0] ? 'drafts' : ''"
        >
          <mu-list-item-action>
            <mu-icon value="drafts"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Drafts</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon
              class="toggle-icon"
              size="24"
              value="keyboard_arrow_down"
            ></mu-icon>
          </mu-list-item-action>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 3</mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item
          button
          :ripple="false"
          nested
          :open="open === 'inbox'"
          @toggle-nested="open = arguments[0] ? 'inbox' : ''"
        >
          <mu-list-item-action>
            <mu-icon value="inbox"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Inbox</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon
              class="toggle-icon"
              size="24"
              value="keyboard_arrow_down"
            ></mu-icon>
          </mu-list-item-action>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 3</mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item
          button
          :ripple="false"
          nested
          :open="open === 'stared'"
          @toggle-nested="open = arguments[0] ? 'stared' : ''"
        >
          <mu-list-item-action>
            <mu-icon value="grade"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Stared</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon
              class="toggle-icon"
              size="24"
              value="keyboard_arrow_down"
            ></mu-icon>
          </mu-list-item-action>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 3</mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>

<script>
// @ is an alias to /src
// import Son from "@/components/Son.vue";
import { addMoreParams } from "@/mixins/mixins";
export default {
  name: "home",
  components: {
    // Son
  },
  mixins: [addMoreParams],
  data() {
    return {
      loading: false,
      open: ""
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
    // var string1 = "jspang.com";
    // const gogo = function(str) {
    //   return "hi" + str;
    // };
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
// .demo-list-wrap {
//   width: 100%;
//   max-width: 360px;
// }
.active {
  background: red;
  font-size: 50px;
}
</style>
