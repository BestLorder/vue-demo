// import Vue from "vue";
import Loading from "./loading";

let LoadingToast = {
  install(Vue) {
    Vue.prototype.$myLoading = function(show) {
      let LoadingStructor = Vue.extend(Loading);
      console.log(new LoadingStructor().$mount());
      let loadingDom = new LoadingStructor().$mount();
      if (show) {
        document.body.appendChild(loadingDom.$el); // 把生成的提示的dom插入body中
      } else {
        let dom = document.getElementsByClassName("login-wrapper");
        Array.from(dom).forEach(item => {
          document.body.removeChild(item);
        });
      }
      loadingDom.show = show;
    };
  }
};

// function() {
//   return new Promise(() => {
//     let loadingDom = new LoadingStructor({
//       el: document.createElement("div")
//     });
//     document.body.appendChild(loadingDom.$el);
//     // if (show) {

//     // } else {
//     //   let dom = document.getElementsByClassName("login-wrapper");
//     //   Array.from(dom).forEach(item => {
//     //     document.body.removeChild(item);
//     //   });
//     // }
//     loadingDom.show = true;
//   });
// };

export default LoadingToast;
