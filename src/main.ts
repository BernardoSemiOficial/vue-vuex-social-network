import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";

import { store } from "@/store/index";

import "./assets/main.css";

Vue.use(LottieVuePlayer);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
