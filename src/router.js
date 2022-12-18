import Home from '../src/pages/Home.vue';
import Login from '../src/pages/Login.vue';
import VueRouter from 'vue-router'

const routes = [
  { path: '/home', component: Home },
  { path: '/login', component: Login },
];
const router = new VueRouter({routes, mode: 'history'})
export default router