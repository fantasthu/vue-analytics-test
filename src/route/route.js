import Vue from "vue";
import VueRouter from "vue-router";
import VueAnalytics from "vue-analytics";
Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/home"),
    meta: {
      name: "home",
      analytics: {
        pageviewTemplate(route) {
          return {
            title: "日照香炉生紫烟",
            page: route.path,
            location: "www.ohmalimalihong.com"
          };
        }
      }
    }
  },
  {
    name: "girl",
    path: "/girl",
    component: () => import("@/views/girl"),
    meta: {
      name: "girl",
      analytics: {
        pageviewTemplate(route) {
          return {
            title: "遥看瀑布挂前川",
            page: route.path,
            location: "www.ohmalimalihong.com"
          };
        }
      }
    }
  },
  {
    path: "*",
    name: "helloworld",
    component: () => import("@/components/HelloWorld"),
    meta: {
      name: "HelloWorld",
      analytics: {
        pageviewTemplate(route) {
          return {
            title: "遥看瀑布挂前川",
            page: route.path,
            location: "www.ohmalimalihong.com"
          };
        }
      }
    }
  }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

export default router;
