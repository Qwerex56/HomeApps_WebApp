import { useAuthStore } from '@/stores/auth/authStore';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/pages/HomePage.vue') },
    { path: '/login', name: 'login', component: () => import('@/pages/loginPage/LoginPage.vue') },
    { path: '/user-dashboard',
      name: 'user-dashboard',
      component: () => import('@/pages/userDashBoardPage/UserDashBoardPage.vue'),
      beforeEnter: (_, __) => {
        const authStore = useAuthStore();

        if (!authStore.token) {
          return 'login';
        }

        return true;
      }
    },
  ],
})

export default router
