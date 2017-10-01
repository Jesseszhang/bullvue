// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './app/app';
import router from './router';
import FastClick from 'fastclick'

// import VueTouch from 'vue-touch'
// Vue >= 2.0 Hammer.js 2.0 Hammer.js 2.0 Touch events plugin for Vue.js this is a BETA Release
// Vue.use(VueTouch, {name: 'v-touch'});
// 暂时不需要
// import _ from 'lodash/core';
// 使用axios代替VueResource

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
