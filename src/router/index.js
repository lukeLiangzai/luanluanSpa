import Vue from 'vue'
import Router from 'vue-router'

// import enterElement from '@/components/enterElement'
const enterElement=()=>import('@/components/enterElement')

// import ivfcalc from '@/components/layout/ivfcalc'
const ivfcalc=()=>import('@/components/layout/ivfcalc')

// import ivfcalcsucc from '@/components/layout/ivfcalcsucc'
const ivfcalcsucc=()=>import('@/components/layout/ivfcalcsucc')

// import login from '@/components/login/login'
const login=()=>import('@/components/login/login')

// import hospitalShow from '@/components/hospital/hospitalShow'
const hospitalShow=()=>import('@/components/hospital/hospitalShow')

// import informationShow from '@/components/information/informationShow'
const informationShow=()=>import('@/components/information/informationShow')

// import serviceShow from '@/components/service/serviceShow'
const serviceShow=()=>import('@/components/service/serviceShow')

// import orderList from '@/components/order/orderList'
const orderList=()=>import('@/components/order/orderList')

// import appointmentsList from '@/components/order/appointmentsList'
const appointmentsList=()=>import('@/components/order/appointmentsList')

// import orderShow from '@/components/order/orderShow'
const orderShow=()=>import('@/components/order/orderShow')

// import confirmorder from '@/components/order/confirmorder'
const confirmorder=()=>import('@/components/order/confirmorder')

import store from '../store/index'

// import my_address from '@/components/personal/my_address'
const my_address=()=>import('@/components/personal/my_address')

// import coupon from '@/components/personal/coupon'
const coupon=()=>import('@/components/personal/coupon')

// import favorite from '@/components/personal/favorite'
const favorite=()=>import('@/components/personal/favorite')

// import info from '@/components/personal/info'
const info=()=>import('@/components/personal/info')

Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'enterElement',
      component: enterElement
    }
    ,{
      path: '/ivfcalc',
      name: 'ivfcalc',
      component: ivfcalc,
    }
    ,{
      path: '/ivfcalcsucc/:succval',
      name: 'ivfcalcsucc',
      component: ivfcalcsucc,
    }
    ,{
      path: '/login',
      name: 'login',
      component: login,
    }
    ,{
      path: '/hospitalShow/:hid',
      name: 'hospitalShow',
      component: hospitalShow,
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
      path: '/orderList',
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
        requireAuth: true 
      }
    }
    ,{
      path: '/orderShow/:orderId',
      name: 'orderShow',
      component: orderShow,
      meta: {
        requireAuth: true 
      }
    }
    ,{
      path: '/confirmorder/:conId',
      name: 'confirmorder',
      component: confirmorder,
      meta: {
        requireAuth: true 
      }
    }
    ,{
      path: '/my_address',
      name: 'my_address',
      component: my_address,
      meta: {
        requireAuth: true 
      }
    }
    ,{
      path: '/coupon',
      name: 'coupon',
      component: coupon,
      meta: {
        requireAuth: true 
      }
    }
    ,{
      path: '/favorite',
      name: 'favorite',
      component: favorite,
      meta: {
        requireAuth: true 
      }
    }
    ,{
      path: '/info',
      name: 'info',
      component: info,
      meta: {
        requireAuth: true 
      }
    }
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
