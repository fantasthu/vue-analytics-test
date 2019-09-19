### 功能

当您在网站中添加了上述任何一种跟踪代码段之后，就会针对用户访问的每个页面发送网页浏览数据。Google Analytics（分析）通过处理此数据可以推导出大量信息，其中包括：

- 用户总共在您网站上停留了多少时间。
- 用户在每个网页上停留的时间以及用户查看这些网页的次序。
- 用户点击了哪些内部链接（根据下一个网页浏览的网址得到）。

此外，IP 地址、用户代理字符串以及 analytics.js 在创建新跟踪器时查看的初始网页可用于确定以下这类信息：

- 用户的地理位置。
- 用户使用的浏览器和操作系统。
- 屏幕尺寸以及是否安装了 Flash 或 Java。
- 引荐网站。

### 首先生成 test 文件

使用 vue-cli

```
vue create projectName
```

### 注册账号

[注册指南](https://support.google.com/analytics/answer/1008080?hl=zh-Hans&visit_id=637044707359623679-3744912426&rd=1)

注册完后会给个跟踪 ID : UA-XXXXXX;

还有响应的全局网站代码 (gtag.js),复制到 head 标签首位

### 添加需要依赖

```
npm install vue-router
npm install vue-analytics
```

- [vue-router](https://router.vuejs.org/zh/guide/)
- [vue-analytics](https://github.com/MatteoGabriele/vue-analytics)

在 vue.config.js 中添加代码

```
module.exports = {
  ......
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].ga = process.env.BASE_GA;
      return args;
    });
  }
  ......
};
```

在 main.js 中引入

```
import VueAnalytics from "vue-analytics";

Vue.use(VueAnalytics, {
  id: process.env.BASE_GA || "UA-148352580-1",
  disableScriptLoader: true,
  router,
  autoTracking: {
    pageviewOnLoad: false
  }
});
```

.env.production 新建并添加代码

```
BASE_GA = ''UA-148352580-1''
```

#### 检查 GA 是否正常工作

首先下载谷歌插件[Tag Assistant (by Google)](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk),然后进行相应页面,点击 record,刷新页面,如果是绿色就代表工作正常

![01](https://github.com/easterCat/vue-analytics-test/blob/master/src/assets/1.png?raw=true)

点击 VIEW RECORDINGS

![02](https://github.com/easterCat/vue-analytics-test/blob/master/src/assets/2.png?raw=true)

我刷新页面 3 次就统计 3 pages tracked

```
......
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
......
```

![3](https://github.com/easterCat/vue-analytics-test/blob/master/src/assets/3.png?raw=true)

执行一些其他的操作,在 home 和 girl 组件中添加一个按钮点击事件

```
tryClick() {
    this.$ga.event("click", "今天是个好日子,上街去玩耍", "00687824");

    setTimeout(() => {
      this.$ga.exception("我就是出错了,怎么了?");
    }, 1000);
  }
```

打开分析页面,事件和错误信息都已经统计到

![4](https://github.com/easterCat/vue-analytics-test/blob/master/src/assets/4.png?raw=true)

- GA 有正常初始化
- 页面加载时 PageView 有发出，并且只发了一次；
- 路由切换时 PageView 有发出，并且只发了一次；
- 事件可以正常发出;

#### 指标名称

- VV(Video View，播放数)，是指在一个统计周期内，视频被打开的次数之和。
- CV(Content Views，内容播放数)，是指在一个统计周期内，视频被打开，且视频正片内容（除广告）被成功播放的次数之和。
- PV(Page View，浏览量)，是指在一个统计周期内，浏览页面的数之和。
- UV(Unique Visitor，访客数)，是指在一个统计周期内，访问网站的人数之和。

### 谷歌追踪文档

在单页面应用中,需要自己触发方便 google 追踪

- [vue-analytics/docs](https://github.com/MatteoGabriele/vue-analytics/tree/master/docs) vue-analytics 文档
- [google analyticsjs](https://developers.google.com/analytics/devguides/collection/analyticsjs/events) google analyticsjs 官网

#### 参考

[Vue 遇上 Analytics](https://juejin.im/post/5c3e1e0f51882524b77b7130)
