import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/app/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/app/pages/IndexPage.vue') },
      {
        path: 'company',
        component: () => import('src/app/pages/CompanyPage.vue')
      },
      {
        path: 'contact',
        component: () => import('src/app/pages/ContactUs.vue')
      },
      {
        path: 'vankcard',
        component: () => import('src/app/pages/VankCardPage.vue')
      },
      {
        path: 'people',
        component: () => import('src/app/pages/PeoplePage.vue')
      },
      {
        path: 'vankversity',
        component: () => import('src/app/pages/VankVersityPage.vue')
      },
      {
        path: 'minors',
        component: () => import('src/app/pages/MinorsPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/app/pages/ErrorNotFound.vue')
  }
];

export default routes;
