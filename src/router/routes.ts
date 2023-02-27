import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/app/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/app/pages/IndexPage.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/app/pages/ErrorNotFound.vue')
  }
];

export default routes;
