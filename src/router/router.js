import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login';

// 在模块化中使用 vue-router ，需要在 Vue.use() 中进行注册
Vue.use(Router);

// 导出路由对象
export default new Router({
  routes: [
    {name: 'login', path: '/login', component: Login}
  ]
});
