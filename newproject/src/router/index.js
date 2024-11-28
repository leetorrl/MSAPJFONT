import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/guest/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/loginview',
      name: 'loginview',
      component: LoginView
    },
  ]
})

export default router
