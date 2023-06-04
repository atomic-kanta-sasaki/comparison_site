import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})
// router.beforeEach((to, from, next) => {
//   const token = store.state.token
//   if (to.meta.requiresAuth && !token) {
//     next('/') // ログイン画面へリダイレクト
//   } else {
//     next() // そのまま進む
//   }
// })

export default router