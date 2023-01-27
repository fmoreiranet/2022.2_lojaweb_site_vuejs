import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user/add',
      name: 'user-add',
      component: () => import('../views/UserAdd.vue')
    },
    {
      path: '/user/list',
      name: 'user-list',
      component: () => import('../views/UserList.vue')
    },
    {
      path: '/user/enter',
      name: 'user-login',
      component: () => import('../views/UserLogin.vue')
    },
    {
      path: '/user/perfil/:id',
      name: 'user-perfil1',
      component: () => import('../views/UserPerfil.vue')
    },
  ]
});

export default router;
