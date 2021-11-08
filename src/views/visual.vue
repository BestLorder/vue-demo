<template>
  <div>
    <iframe
      v-for="item in list"
      :key="item.ID"
      :src="item.url"
      height="368"
      width="207"
      name="demo"
      scrolling="auto"
      frameborder="0"
    ></iframe>
    <!-- <iframe
      src="http://192.168.16.210:3000/roomn?classId=410833308115350420&liveType=1&dataFrom=2&position=4&channel=9999&subChannel=1&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNTc5OTMwODkyNzI3MDA5MjkiLCJpc3MiOiJrbm93bGVkZ2UiLCJleHAiOjE2MTk1OTU1NDAsImlhdCI6MTYxOTMyOTY4MH0.GH_x3-dXFPm_o82aVyMJ9pXMs6gVUpYIy7Mq2iMVYmg&role=monitor"
      height="736"
      width="414"
      name="demo"
      scrolling="auto"
      frameborder="0"
    ></iframe> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: 123,
      list: [
        {
          url:
            "http://192.168.16.210:3000/roomn?classId=317629180278997086&liveType=1&dataFrom=2&position=4&channel=9999&subChannel=1&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNTc5OTMwODkyNzI3MDA5MjkiLCJpc3MiOiJrbm93bGVkZ2UiLCJleHAiOjE2MTk3MDYyODcsImlhdCI6MTYxOTQ0MzMwN30.X6H3sYsnJA1K7CycY_A7N4K_YYdGQ2Lk_sjO0vPPucQ&role=monitor",
        },
      ],
    };
  },
  mounted() {
    console.log(123);
  },
};
</script>

<style lang="less" scoped></style>
