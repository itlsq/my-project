<template>
	<el-row class="container">
	  <el-col :span="24"><div class="header">血液透析管理系统</div></el-col>
	  <el-col :span="24" class="main">
			<aside class="leftNav">
				<!--展开折叠开关-->
		        <div class="menu-toggle" @click.prevent="collapse">
		          <i class="iconfont icon-menufold" v-show="!collapsed"></i>
		          <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
		        </div>
				<el-menu :default-active="defaultActiveIndex" router :collapse="collapsed" @select="handleSelect"  background-color="#333744"
      text-color="#fff">
      			<template v-for="(item,index) in $router.options.routes" v-if="item.menuShow">
      				<el-submenu v-if="!item.leaf" :index="index+''">
		              <template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
		              <el-menu-item v-for="term in item.children" :key="term.path" :index="term.path" v-if="term.menuShow"
		                            :class="$route.path==term.path?'is-active':''">
		                <i :class="term.iconCls"></i><span slot="title">{{term.name}}</span>
		              </el-menu-item>
		            </el-submenu>
		            <el-menu-item v-else-if="item.leaf&&item.children&&item.children.length" :index="item.children[0].path"
		                          :class="$route.path==item.children[0].path?'is-active':''">
		              <i :class="item.iconCls"></i><span slot="title">{{item.children[0].name}}</span>
		            </el-menu-item>
      			</template>
				 <!--  <el-submenu index="1">
				   <template slot="title">
				     <i class="el-icon-location"></i>
				     <span slot="title">设备管理</span>
				   </template>
				     <el-menu-item index="1-1">设备1</el-menu-item>
				     <el-menu-item index="1-2">设备2</el-menu-item>
				 </el-submenu>
				  <el-submenu index="2">
				   <template slot="title">
				     <i class="el-icon-menu"></i>
				     <span slot="title">销售</span>
				   </template>
				     <el-menu-item index="2-1">销售1</el-menu-item>
				     <el-menu-item index="2-2">销售2</el-menu-item>
				 </el-submenu>
				 <el-submenu index="3">
				   <template slot="title">
				     <i class="el-icon-document"></i>
				     <span slot="title">报表</span>
				   </template>
				     <el-menu-item index="3-1">报表1</el-menu-item>
				     <el-menu-item index="3-2">报表2</el-menu-item>
				 </el-submenu>
				 <el-submenu index="4">
				   <template slot="title">
				     <i class="el-icon-setting"></i>
				     <span slot="title">系统</span>
				   </template>
				     <el-menu-item index="4-1">系统1</el-menu-item>
				     <el-menu-item index="4-2">系统2</el-menu-item>
				 </el-submenu> -->
				 				</el-menu>
			</aside>
			<section class="rightContent">
				 <div class="rightDiv">
		          <el-col :span="24" class="content-wrapper">
		            <transition name="fade" mode="out-in">
		              <router-view></router-view>
		            </transition>
		          </el-col>
		        </div>
			</section>
	  </el-col>
	</el-row>
</template>
<script>
  export default {
    data() {
      return {
      	defaultActiveIndex: "0",
        collapsed: false
      };
    },
    methods: {
      handleSelect(index){
        this.defaultActiveIndex = index;
      },
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
      }
    }
  }
</script>
<style scoped lang="scss">
.container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
	.header{height:50px;line-height:50px;background-color:#373d41;color:#FFF;padding-left:20px;}
	.main{position:absolute;top:50px;bottom:0}
	.leftNav{height:100%;float:left;background-color:#333744;
		.menu-toggle {
	      background: #4A5064;
	      text-align: center;
	      color: white;
	      height: 26px;
	      line-height: 30px;
	    }
		.el-menu-vertical-demo:not(.el-menu--collapse) {
		    width: 180px;
		    min-height: 400px;
		  }
		 .el-submenu .el-menu-item{min-width:180px;padding-left:52px!important;}
		 
		 .el-menu:not(.el-menu--collapse){width:180px;border-right:none}
		 .el-menu-item.is-active{background-color:#00C1DE!important;color:#FFF}
		 .el-menu .el-menu-item{
	        height: 46px;
	        line-height: 46px;
	      }
	      .el-submenu .el-menu-item:hover{
	        background-color: #7ed2df!important;
	      }
	}

	.rightContent{width:auto;height:100%;box-sizing:border-box;
		  background: #fff;
	      flex: 1;
	      overflow-y: auto;
	      padding: 10px;
	      padding-bottom: 1px;
	}

}
</style>