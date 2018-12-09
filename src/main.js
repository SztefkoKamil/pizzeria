import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import routes from './routes';
import App from './App.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
