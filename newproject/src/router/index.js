import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/guest/LoginView.vue'
// import ManageMent from '@/views/manager/ManageMent.vue'
// import StudentMyPage from '@/views/student/StudentMyPage.vue'
import JoinTermsOfUse from '@/views/guest/JoinTermsOfUse.vue'
import JoinView from '@/views/guest/JoinView.vue'
import JoinComplete from '@/views/guest/JoinComplete.vue'
import Studentmain from '@/views/student/Studentmain.vue'

const studentRouter = [
  {
    path: '/studentmain',
    name: 'studentmain',
    component: Studentmain
  },
]

const teacherRouter = []

const managerRouter = []

const guestRouter = [
  {
    path: '/loginview',
    name: 'loginview',
    component: LoginView
  },
  {
    path: '/jointermsofuse',
    name: 'jointermsofuse',
    component: JoinTermsOfUse,
  },
  {
    path: '/joinview',
    name: 'joinview',
    component: JoinView,
  },

  {
    path: '/joincomplete',
    name: 'joincomplete',
    component: JoinComplete,
  },

]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   ...guestRouter,
   ...managerRouter,
   ...teacherRouter,
   ...studentRouter,
    // {
    //   path: '/mypage',
    //   name: 'MyPage',
    //   component: StudentMyPage
    // }
  ]
})

export default router
