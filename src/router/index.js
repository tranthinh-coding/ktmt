import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/components/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/xay-dung-bo-nho",
    name: "xay-dung-bo-nho",
    component: () => import(/* webpackChunkname: "XAYDUNGBONHO" */ "@/components/XayDungBoNho.vue"),
  },
  {
    path: "/ty-so-cache",
    name: "ty-so-cache",
    component: () => import(/* webpackChunkname: "tysocache" */ "@/components/TySoCache.vue"),
  },
  {
    path: "/anh-xa-tap-hop",
    name: "anh-xa-tap-hop",
    component: () => import(/* webpackChunkname: "anhxataphop" */ "@/components/AnhXa.vue"),
  },
  {
    path: "/phan-trang",
    name: "phan-trang",
    component: () => import(/* webpackChunkname: "phantrang" */ "@/components/PhanTrang.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: "router-active",
});

export default router;
