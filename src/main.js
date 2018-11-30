import 'modern-normalize';
import Vue from 'vue';
import '@/assets/font/icon/iconfont.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
