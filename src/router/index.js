import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index'
// import Hospital from '@/components/hospital'
// import Information from '@/components/information'
// import Personal from '@/components/personal'
// import Service from '@/components/service'
import EnterElement from '@/components/enterElement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EnterElement',
      component: EnterElement
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
