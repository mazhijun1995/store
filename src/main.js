// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// 导入根组件
import App from './App';
// 导入路由文件
import router from './router/router';

import '@/assets/css/index.css';
// 导入 element-ui 组件模板 和 其相应的样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 在vue中注册 element-ui 组件
Vue.use(ElementUI);
// 在浏览器控制台不输出多余信息
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
