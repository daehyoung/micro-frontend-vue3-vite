// main-app/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/sub1/'
  },
  {
    path: '/sub1',
    component: () => import('../components/App1Wrapper.vue'),
  },
  {
    path: '/sub2',
    component: () => import('../components/App2Wrapper.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
