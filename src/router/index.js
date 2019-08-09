import Vue from 'vue'
import Router from 'vue-router'
import EnterElement from '@/components/enterElement'
import Ivfcalc from '@/components/layout/ivfcalc'
import Ivfcalcsucc from '@/components/layout/ivfcalcsucc'

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
    ,{
      path: '/ivfcalcsucc',
      name: 'Ivfcalcsucc',
      component: Ivfcalcsucc
    }
    
  ]
})
