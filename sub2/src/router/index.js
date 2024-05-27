import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/sub2'),
  // history: createWebHistory(import.meta.env.BASE_URL),
  // base: '/sub1',
  routes
})

export default router