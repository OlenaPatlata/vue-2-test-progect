import HomePage from './pages/HomePage.vue';
import ApartmentPage from './pages/ApartmentPage.vue';
import ErrorPage from './pages/ErrorPage';
import VueRouter from 'vue-router';

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/apartments/:id', component: ApartmentPage, name: 'apartment' },
  { path: '*', component: ErrorPage, name: 'error-page' },
];
const router = new VueRouter({ routes, mode: 'history' });
export default router;
