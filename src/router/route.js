import Vue from 'vue'
import Router from 'vue-router'
import index from "../pages/index.vue";
import login from "../pages/user/login.vue";
import setPassword from "../pages/user/setPassword.vue";
import register from "../pages/user/register.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/index",
      component: index,
      meta: {
        titile: "首页"
      },
      children: []
    },
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/login",
      component: login,
      meta: {
        titile: "登录"
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
        titile: "注册"
      }
    }
  ]
});
