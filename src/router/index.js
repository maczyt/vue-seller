import Vue from 'vue';
import Router from 'vue-router';

const Goods = () => import('@/pages/goods');

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'goods',
    component: Goods
  }]
})
