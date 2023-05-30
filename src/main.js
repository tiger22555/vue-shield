import Vue from 'vue'
import App from './App.vue'
//引入elementui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//挂载路由到根节点,首先引入router
import router from './router';
//引入vuex进行挂载
import store from './store'
import "vue-easytable/libs/theme-default/index.css";
import VueEasytable from  "vue-easytable";





//引入一些组件
Vue.config.productionTip = false;
//进行使用
Vue.use(ElementUI);
Vue.use(VueEasytable);


new Vue({
  //路由挂载
  router,
  //vuex挂载
  store,
  render: h => h(App),
}).$mount('#app');
