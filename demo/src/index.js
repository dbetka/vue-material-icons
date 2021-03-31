import Vue from 'vue';
import App from './App.vue';
import router from './router';
import MaterialIcons from 'material-icons';

Vue.config.productionTip = false;

Vue.use(MaterialIcons);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
