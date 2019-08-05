import Vue from 'vue'
import Router from 'vue-router'
import EnterElement from '@/components/enterElement'
import Ivfcalc from '@/components/layout/ivfcalc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EnterElement',
      component: EnterElement
    }
    ,{
      path: '/ivfcalc',
      name: 'Ivfcalc',
      component: Ivfcalc
    }
    // ,{
    //   path: '/hospital',
    //   name: 'Hospital',
    //   component: Hospital
    // }
    // ,{
    //   path: '/information',
    //   name: 'Information',
    //   component: Information
    // }
    // ,{
    //   path: '/personal',
    //   name: 'Personal',
    //   component: Personal
    // }
    // ,{
    //   path: '/service',
    //   name: 'Service',
    //   component: Service
    // }
    
  ]
})
