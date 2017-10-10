import Vue from 'vue';
import Router from 'vue-router';
import home from '@/example/home/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
});
