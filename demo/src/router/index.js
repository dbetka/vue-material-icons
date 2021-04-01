import Vue from 'vue';
import VueRouter from 'vue-router';
import Once from '../views/once';
import Plugin from '../views/plugin';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Plugin',
    component: Plugin,
  },
  {
    path: '/once',
    name: 'Once',
    component: Once,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
