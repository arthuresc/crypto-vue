import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: () => {
      return { name: 'list' }
    }
  },
  {
    name: 'list',
    path: '/list',
    component: () => import('./components/views/ListCoins.vue')
  },
  {
    name: 'view',
    path: '/view/:id',
    props: true,
    component: () => import('./components/views/ViewCoin.vue')
  }
];
const router = createRouter({
  base: '/',
  routes,
  history: createWebHashHistory()
})

export default router;