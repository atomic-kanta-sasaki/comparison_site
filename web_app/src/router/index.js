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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Calendar.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router