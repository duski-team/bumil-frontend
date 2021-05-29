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
    name: 'Logo',
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
    redirect: '/dashboardadmin',
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
        name: 'List Ibu Hamil',
        component: () => import('@/views/admin/ListBumil')
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
    name: 'Admin',
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
