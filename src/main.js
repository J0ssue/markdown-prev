import Vue from "vue";
import App from "./App.vue";

// styles
import './app.css';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");