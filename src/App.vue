<!--
 * @Descripttion: 
 * @Author: Lorder
 * @Date: 2019-12-05 16:21:22
<<<<<<< HEAD
 * @LastEditors  : Lorder
 * @LastEditTime : 2020-01-17 18:32:37
=======
 * @LastEditors: Lorder
 * @LastEditTime: 2020-01-03 14:47:31
>>>>>>> parent of c1566c9... 1
 -->
<template>
  <div id="app">
    <!-- <div id="nav">
<<<<<<< HEAD
      <router-link to="/">Home1</router-link> |
      <router-link to="/about">About2</router-link>
=======
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
>>>>>>> parent of c1566c9... 1
    </div> -->
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
