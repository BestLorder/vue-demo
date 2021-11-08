/*
 * @Descripttion:
 * @Author: Lorder
 * @Date: 2019-12-05 16:21:22
 * @LastEditors: Lorder
 * @LastEditTime: 2020-01-08 19:42:39
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    // name: "hls",
    // component: () => import("../views/hls.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("../views/Table.vue"),
  },
  {
    path: "/copyImg",
    name: "copyImg",
    component: () => import("../views/CopyImg.vue"),
  },
  {
    path: "/play",
    name: "play",
    component: () => import("../views/play.vue"),
  },
  {
    path: "/hls",
    name: "hls",
    component: () => import("../views/hls.vue"),
  },
  {
    path: "/video",
    name: "video",
    component: () => import("../views/video.vue"),
  },
  {
    path: "/hlsIos",
    name: "hlsIos",
    component: () => import("../views/hlsIos.vue"),
  },
  {
    path: "/360",
    name: "360",
    component: () => import("../views/360.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/visual",
    name: "visual",
    component: () => import("../views/visual.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
