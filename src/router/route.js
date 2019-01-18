import Vue from 'vue'
import Router from 'vue-router'
import index from "../pages/index.vue";
import webview from "../pages/webview.vue";
import special from "../pages/special.vue";
import login from "../pages/user/login.vue";
import setPassword from "../pages/user/setPassword.vue";
import register from "../pages/user/register.vue";
import wealth from "../pages/index/wealth.vue";
import coin from "../pages/index/coin.vue";
import userInfo from "../pages/index/userInfo.vue";
import photo from "../pages/index/photo.vue";
import concern from "../pages/concern.vue";
import device from "../pages/device.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/index", component: index, redirect: "/index/coin", meta: { title: "首页" },children: [
        { path: "/index/wealth", component: wealth, meta: { title: "财富" } },
        {path: "/index/coin",component: coin,meta: {title: "货币"}},
        {path: "/index/userInfo",component: userInfo,meta: {title: "我的"},children: [
          {path: "/index/photo",component: photo,meta: {title: "选取照片"},}]
      },
      {path: "/index/concern",component: concern,meta: {title: "关注用户"}
      },
      ]
    },
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/login",
      component: login,
      meta: {
        title: "登录"
      }
    },
    {
      path: "/setPassword",
      component: setPassword,
      meta: {
        titile: "设置密码"
      }
    },
    {
      path: "/register",
      component: register,
      meta: {
        title: "注册"
      }
    },
    {
      path: "/webview",
      component: webview,
      meta: {
        title: "试试"
      }
    },
    {
      path: "/special",
      component: special,
      meta: {
        title: "小特效"
      }
    },
    {
      path: "/device",
      component: device,
      meta: {
        title: "设备信息"
      }
    }
  ]
});
