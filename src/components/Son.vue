<template>
  <div>
    Son
    <Grandson v-bind="$attrs" v-on="$listeners"></Grandson>
  </div>
</template>

<script>
import Grandson from "@/components/Grandson.vue";
export default {
  name: "HelloWorld",
  components: {
    Grandson
  },
  props: {
    msg: String
  },
  // inheritAttrs: false,
  created() {
    // console.log(this.$attrs);
    // console.log(this.$listeners);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
