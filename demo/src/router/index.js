import Vue from 'vue';
import VueRouter from 'vue-router';
import Page from '../views/page';
import FullBundle from '../views/full-bundle';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'page',
    component: Page,
  },
  {
    path: '/full-bundle',
    name: 'FullBundle',
    component: FullBundle,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
