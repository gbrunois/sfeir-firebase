import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

import api from "@/api/index.js";
import authService from "@/api/auth.service.js";

api.initializeApp();
authService.getAuth();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
