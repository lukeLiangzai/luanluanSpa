import Vue from 'vue'
import Router from 'vue-router'
import EnterElement from '@/components/enterElement'
import Ivfcalc from '@/components/layout/ivfcalc'
import Ivfcalcsucc from '@/components/layout/ivfcalcsucc'
import Login from '@/components/login/login'
import HospitalShow from '@/components/hospital/hospitalShow'
import informationShow from '@/components/information/informationShow'
import serviceShow from '@/components/service/serviceShow'
import orderList from '@/components/order/orderList'
import appointmentsList from '@/components/order/appointmentsList'
import orderShow from '@/components/order/orderShow'
import store from '../store/index'

Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'EnterElement',
      component: EnterElement,
    }
    ,{
      path: '/ivfcalc',
      name: 'Ivfcalc',
      component: Ivfcalc,
    }
    ,{
      path: '/ivfcalcsucc/:succval',
      name: 'Ivfcalcsucc',
      component: Ivfcalcsucc,
    }
    ,{
      path: '/login',
      name: 'Login',
      component: Login,
    }
    ,{
      path: '/hospitalShow/:hid',
      name: 'HospitalShow',
      component: HospitalShow,
    }
    ,{
      path: '/informationShow/:fid',
      name: 'informationShow',
      component: informationShow,
    }
    ,{
      path: '/serviceShow/:sid',
      name: 'serviceShow',
      component: serviceShow,
    }
    ,{
      path: '/orderList/',
      name: 'orderList',
      component: orderList,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    }
    ,{
      path: '/appointmentsList/',
      name: 'appointmentsList',
      component: appointmentsList,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    }
    ,{
      path: '/orderShow/',
      name: 'orderShow',
      component: orderShow,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    }
    // {
    //   path: '/activity',
    //   name: 'activity',
    //   component: Activity,
    //   meta: {
    //     requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    //   }
    // }
  ]
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      // console.log('该页面需要登陆')
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
