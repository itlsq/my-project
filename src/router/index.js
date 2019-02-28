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
import drug1 from '../components/drug1.vue'
import drug2 from '../components/drug2.vue'
import authority1 from '../components/authority1.vue'
import authority2 from '../components/authority2.vue'
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
    },{
      path: '/',
      name: '药品管理',
      component: Home,
      menuShow: true,
      iconCls: 'el-icon-menu', // 图标样式class
      children: [
        {path: '/components/drug1', component: drug1, name: '药品1', menuShow: true},
        {path: '/components/drug2', component: drug2, name: '药品2', menuShow: true},
        {path: '/components/drug3', component: equipment2, name: '药品2内部', menuShow: false}
      ]
    },{
      path: '/',
      name: '权限管理',
      component: Home,
      menuShow: true,
      iconCls: 'el-icon-document', // 图标样式class
      children: [
        {path: '/components/authority1', component: authority1, name: '权限管理1', menuShow: true},
        {path: '/components/authority2', component: authority2, name: '权限管理2', menuShow: true}
      ]
    }
    ]
})
export default router