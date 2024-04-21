import { createRouter, createWebHistory } from 'vue-router';
import NftItemDetail from './components/NftItemDetail.vue';
import NftMarket from './components/NftMarket.vue';
import Profile from './components/Profile.vue';

// Define route components
const routes = [
  {
    path: '/',
    name: 'NftMarket',
    component: NftMarket
  },
  {
    path: '/nft/:id',
    name: 'NftDetail',
    component: NftItemDetail
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;