// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/route'
import store from "./vuex/vuex"
import $ from "jquery";
import Vant from "vant";
import owner from "../static/js/common";
import "vant/lib/index.css";
import "../static/css/base.css"
Vue.use(Vant);
Vue.prototype.owner = owner;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
