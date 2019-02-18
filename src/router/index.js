/*
* @Author: itlsq
* @Date:   2019-01-15 18:55:46
* @Last Modified by:   itlsq
* @Last Modified time: 2019-01-16 17:26:54
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import equipment1 from '../components/equipment1.vue'
import equipment2 from '../components/equipment2.vue'
Vue.use(Router)
let router = new Router({
  routes:[
    {
      path: '/',
      name: '设备管理',
      component: Home,
      menuShow: true,
      redirect: '/components/equipment1',
      iconCls: 'el-icon-location', // 图标样式class
      children: [
        {path: '/components/equipment1', component: equipment1, name: '设备1', menuShow: true},
        {path: '/components/equipment2', component: equipment2, name: '设备2', menuShow: true}
      ]
    }
    ]
})
export default router