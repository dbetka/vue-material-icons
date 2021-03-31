import Vue from 'vue';
import VueRouter from 'vue-router';
import Page from '../views/page';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'page',
    component: Page,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
