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
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/table",
    name: "table",
    component: () => import("../views/Table.vue")
  },
  {
    path: "/copyImg",
    name: "copyImg",
    component: () => import("../views/CopyImg.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
