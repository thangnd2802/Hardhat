import { createRouter, createWebHistory } from 'vue-router';
import NavBar from './components/NavBar.vue';

// Define route components
const routes = [
  { path: '/nav', component: NavBar },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;