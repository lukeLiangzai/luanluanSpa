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

Vue.use(Lazyload);

Vue.use(Vant);


Vue.prototype.$axios=axios;
Vue.prototype.$qs=qs;
Vue.config.productionTip = false;

axios.defaults.baseURL='https://www.luanluanhaiwai.com/'


axios.interceptors.response.use(

	response => {
		return response;
	},

	error => { //默认除了2XX之外的都是错误的，就会走这里

		if (error.response) {
			switch (error.response.status) {

				case 401:
				router.replace({ //跳转到登录页面
					path: 'login',
					query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
				});

			}
		}
		return Promise.reject(error.response);
	}
);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
