import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";

import "./assets/main.css";

Vue.use(LottieVuePlayer);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
