/*
* @Author: itlsq
* @Date:   2019-01-15 18:55:46
* @Last Modified by:   itlsq
* @Last Modified time: 2019-01-15 19:25:25
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
Vue.use(Router)
let router = new Router({
  routes:[{
      path: '/',
      name: 'home',
      component: Home,
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
    }]
})
export default router