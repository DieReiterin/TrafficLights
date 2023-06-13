import { createRouter, createWebHistory } from 'vue-router'
import RedPage from '../pages/RedPage.vue'
import YellowPage from '../pages/YellowPage.vue'
import GreenPage from '../pages/GreenPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/red'
  },
  {
    path: '/red',
    component: RedPage
  },
  {
    path: '/yellow',
    component: YellowPage
  },
  {
    path: '/green',
    component: GreenPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
