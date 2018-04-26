import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login/index'
import Home from '@/pages/home/index'
import Employee from '@/pages/employee/index'
import Goods from '@/pages/goods/index'
import Test from '@/pages/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
