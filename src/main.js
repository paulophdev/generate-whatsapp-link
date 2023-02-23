import { createApp } from "vue";
import App from "./App.vue";
import Vue3Toastify from "vue3-toastify";
import VueTheMask from "vue-the-mask";
import store from './store'

createApp(App).use(store)
  .use(VueTheMask)
  .use(Vue3Toastify, {
    autoClose: 3000,
  })
  .mount("#app");
