/*
 * @Descripttion:
 * @Author: Lorder
 * @Date: 2019-12-05 16:21:22
 * @LastEditors  : Lorder
 * @LastEditTime : 2020-01-19 14:46:34
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 打印当前环境
import log from "@/assets/js/log";
log.capsule("当前环境", process.env.VUE_APP_ENV, "success");
log.capsule("当前版本", process.env.VUE_APP_VERSION, "success");
import axios from "axios";
Vue.prototype.$axios = axios;
// MuseUI
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
Vue.use(MuseUI);
// ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import Loading from "muse-ui-loading";
import "muse-ui-loading/dist/muse-ui-loading.css";
Vue.use(Loading);
// 自定义loading
import myLoading from "./components/Loading/index";
Vue.use(myLoading);

import Helpers from "muse-ui/lib/Helpers";
Vue.use(Helpers);
import VConsole from "vconsole";
var vConsole = new VConsole();
console.log(vConsole);

import tim from "./tim";
// import insuranceRecord from "record-ui";
// Vue.use(insuranceRecord);

Vue.prototype.tim = tim;
import TIM from "tim-js-sdk";
window.TIM = TIM;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
