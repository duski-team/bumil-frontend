import Vue from 'vue'
import VueRouter from 'vue-router'
import ContainerCS from '@/containers/ContainerCS'
import ContainerGuest from '@/containers/ContainerGuest'
import ContainerAdmin from '@/containers/ContainerAdmin'
import TheContainer from '@/containers/TheContainer'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/',
    name: 'Home',
    component: TheContainer,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/pages/Login')
      },
      {
        path: '/',
        name: 'Logo',
        component: () => import('@/views/Logo')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/pages/Register')
      },
    ],
  },
  {
    path: '/admin',
    redirect: '/listbumil',
    name: 'Admin',
    component: ContainerAdmin,
    children: [
      {
        path: '/dashboardadmin',
        name: 'Dashboard Admin',
        component: () => import('@/views/DashboardAdmin')
      },
      {
        path: '/listbumil',
        name: 'List Nilai Ibu Hamil',
        component: () => import('@/views/admin/ListBumil')
      },
      {
        path: '/listuser',
        name: 'List Data Ibu Hamil',
        component: () => import('@/views/admin/ListUser')
      },
      {
        path: '/listjawaban',
        name: 'List Jawaban',
        component: () => import('@/views/admin/ListJawaban')
      },
      {
        path: '/detailuser',
        name: 'Detail',
        component: () => import('@/views/admin/DetailUser')
      },
      {
        path: '/pertanyaan/pengetahuan',
        name: 'Pertanyaan Pengetahuan',
        component: () => import('@/views/admin/PertanyaanPengetahuan')
      },
      {
        path: '/pertanyaan/sikap',
        name: 'Pertanyaan Sikap',
        component: () => import('@/views/admin/PertanyaanSikap')
      },
    ],
  },
  {
    path: '/guest',
    redirect: '/dashboardguest',
    name: 'Guest',
    component: ContainerGuest,
    children: [
      {
        path: '/dashboardguest',
        name: 'Dashboard Guest',
        component: () => import('@/views/DashboardGuest')
      },
      {
        path: '/survey/pengetahuan',
        name: 'Survey Pengetahuan',
        component: () => import('@/views/guest/SurveyPengetahuan')
      },
      {
        path: '/survey/sikap',
        name: 'Survey Sikap',
        component: () => import('@/views/guest/SurveySikap')
      },
      {
        path: '/surveypost/postpengetahuan',
        name: 'Survey Post Pengetahuan',
        component: () => import('@/views/guest/SurveyPostPengetahuan')
      },
      {
        path: '/surveypost/postsikap',
        name: 'Survey Post Sikap',
        component: () => import('@/views/guest/SurveyPostSikap')
      },
      {
        path: '/materi',
        name: 'Materi',
        component: () => import('@/views/guest/Materi')
      },
      {
        path: '/chatguest',
        name: 'Chat',
        component: () => import('@/views/guest/ChatGuest')
      },
      {
        path: '/pemasangan',
        name: 'Pemasangan IUD',
        component: () => import('@/views/guest/PemasanganIUD')
      },
    ],
  },
  {
    path: '/cs',
    redirect: '/listbumilcs',
    name: 'List Bumil',
    component: ContainerCS,
    children: [
      {
        path: '/dashboardcs',
        name: 'Dashboard CS',
        component: () => import('@/views/DashboardCS')
      },
      {
        path: '/listbumilcs',
        name: 'List Bumil',
        component: () => import('@/views/cs/ListBumilcs')
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  // linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next) =>{
//   if(to.path != '/login'){
//     next({
//       path:'/login'
//     })
//   }
//   else{
//     next()
//   }
// })
export default router
