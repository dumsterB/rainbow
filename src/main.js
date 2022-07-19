import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import VueScrollTo from "vue-scrollto";
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -70,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
Vue.config.productionTip = false;
new Vue({
  created () {
    AOS.init({
      debounceDelay: 80, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 130, //
    })
  },
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
