import Vue from "vue";
import Loading from "./loading";

let LoadingStructor = Vue.extend(Loading);

let LoadingToast = function(show) {
  return new Promise(() => {
    let loadingDom = new LoadingStructor({
      el: document.createElement("div")
    });
    if (show) {
      document.body.appendChild(loadingDom.$el);
    } else {
      let dom = document.getElementsByClassName("login-wrapper");
      Array.from(dom).forEach(item => {
        document.body.removeChild(item);
      });
    }
    loadingDom.show = show;
  });
};
export default LoadingToast;
