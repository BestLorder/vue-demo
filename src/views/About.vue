<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  created() {
    const loading = this.$loading();
    setTimeout(() => {
      loading.close();
    }, 3000);
    console.log(this.$route);
    // this.$router.push({ name: "about", params: { name: "aa", age: 17 } });
  }
};
</script>
