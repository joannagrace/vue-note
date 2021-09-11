import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactPage from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layout/MainLayout.vue'),
    children: [
      {
        name: '',
        path: '',
        component: Home
      },
      {
        name: 'ContactPage',
        path: 'contact',
        component: ContactPage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
