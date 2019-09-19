import Vue from "vue";
import App from "./App.vue";
import router from "./route/route";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: process.env.BASE_GA || "UA-148352580-1",
  checkDuplicatedScript: true,
  router,
  autoTracking: {
    exception: true,
    shouldRouterUpdate(to, from) {
      // next route path is not the same as the previous
      return to.path !== from.path;
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
