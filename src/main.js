// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store'
import { Lazyload } from 'vant';
import { Dialog } from 'vant';

Vue.use(Dialog);

// options 为可选参数，无则不传
Vue.use(Lazyload);

Vue.use(Vant);


Vue.prototype.$axios=axios;
Vue.prototype.$qs=qs;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
