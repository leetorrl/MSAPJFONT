import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/guest/LoginView.vue'
import ManageMent from '@/manager/ManageMent.vue'
import StudentMyPage from '@/student/StudentMyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/loginview',
      name: 'loginview',
      component: LoginView
    },
    {
      path: '/',
      name: 'homManageMente',
      component: ManageMent,
    },
    {
      path: '/mypage',
      name: 'MyPage',
      component: StudentMyPage
    }
  ]
})

export default router
