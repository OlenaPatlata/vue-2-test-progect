import HomePage from './pages/HomePage.vue';
import ApartmentPage from './pages/ApartmentPage.vue';
import ErrorPage from './pages/ErrorPage';
import VueRouter from 'vue-router';
import LoginPage from './pages/LoginPage'

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/apartments/:id', component: ApartmentPage, name: 'apartment' },
  { path: '/login', component: LoginPage, name: 'login-page' },
  { path: '*', component: ErrorPage, name: 'error-page' },
];
const router = new VueRouter({ routes, mode: 'history' });
export default router;
