import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Top from '../pages/Top.vue'


const routes = [
  {
    path: '/',
    name: 'Top Page',
    component: Top
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/calendar',
    name: 'Calendar',

    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../pages/Calendar.vue')

  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router