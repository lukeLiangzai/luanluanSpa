import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

const enterElement=()=>import('@/components/enterElement')
const ivfcalc=()=>import('@/components/layout/ivfcalc')
const ivfcalcsucc=()=>import('@/components/layout/ivfcalcsucc')
const login=()=>import('@/components/login/login')
const hospitalShow=()=>import('@/components/hospital/hospitalShow')
const informationShow=()=>import('@/components/information/informationShow')
const serviceShow=()=>import('@/components/service/serviceShow')
const orderList=()=>import('@/components/order/orderList')
const appointmentsList=()=>import('@/components/order/appointmentsList')
const orderShow=()=>import('@/components/order/orderShow')
const confirmorder=()=>import('@/components/order/confirmorder')
const my_address=()=>import('@/components/personal/my_address')
const coupon=()=>import('@/components/personal/coupon')
const favorite=()=>import('@/components/personal/favorite')
const info=()=>import('@/components/personal/info')

const slidetest=()=>import('@/components/index/slidetest')

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
    ,{
      path: '/slidetest',
      name: 'slidetest',
      component: slidetest,
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
