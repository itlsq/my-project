import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/fonts/iconfont.css'
import store from './vuex/store.js'
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
