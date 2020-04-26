import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Store from '@/views/Store'
import Service from '@/views/Service'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Store',
      name: 'Store',
      component: Store
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    }
  ]
})