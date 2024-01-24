import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/Index.vue'),
        children: [
          { path: '/artistas', component: () => import('pages/Artistas.vue') },
          { path: '/generos', component: () => import('pages/Generos.vue') },
          { path: '/canciones', component: () => import('pages/Canciones.vue') },
          { path: '/biblioteca', component: () => import('pages/Biblioteca.vue') },
        ]
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
