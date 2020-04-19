import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Menu from '@/views/Menu'
import Store from '@/views/Store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/Store',
      name: 'Store',
      component: Store
    }
  ]
})