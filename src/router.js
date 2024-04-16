import { createRouter } from "vue-router";

const routes = [
  {
    name: 'home',
    path: '/',
    component: './components/views/ListCoins.vue'
  },
  {
    name: 'bitcoin',
    path: '/bitcoin',
    component: './components/views/ViewBitcoin.vue'
  }
]