import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "users",
      component: UserView,
    },
    {
      path: "/favorite",
      name: "favorite",
      component: () => import("../views/FavoriteView.vue"),
    },
  ],
});

export default router;
