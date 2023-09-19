import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "main",
    name: "Layout",
    component: () => import("../layouts/Layout.vue"),
    children: [
      {
        name: "Main",
        path: "main",
        component: () => import("../views/MainPage"),
      },
      {
        name: "Create",
        path: "create",
        component: () => import("../views/CreateLecture"),
      },
      {
        name: "Information",
        path: "information",
        component: () => import("../views/Information"),
      },
      {
        name: "Purpose",
        path: "purpose",
        component: () => import("../views/Purpose"),
      },
      {
        name: "Vocabulary1",
        path: "/voca1",
        component: () => import("../views/Vocabulary"),
        meta: {
          active: "voca1",
        },
      },
      {
        name: "Vocabulary2",
        path: "/voca2",
        component: () => import("../views/Vocabulary"),
        meta: {
          active: "voca2",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
