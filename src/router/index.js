import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/personal-site/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/personal-site/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
