import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/login/index.vue'
import Test from '@/components/test/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/test",
      component: Test
    },
    {
      path: "/login",
      component: Login
    }
  ]
})

export default router
