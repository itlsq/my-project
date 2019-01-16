/*
* @Author: itlsq
* @Date:   2019-01-15 18:55:46
* @Last Modified by:   itlsq
* @Last Modified time: 2019-01-16 17:26:54
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import buy1 from '../components/buy1.vue'
import buy2 from '../components/buy2.vue'
Vue.use(Router)
let router = new Router({
  routes:[{
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/buy1',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        {path: '/buy1', component: buy1, name: '采购1', menuShow: true},
        {path: '/buy2', component: buy2, name: '采购2', menuShow: true}
      ]
    }]
})
export default router