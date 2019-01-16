<template>
	<el-row class="container">
	  <el-col :span="24"><div class="header">药品管理系统</div></el-col>
	  <el-col :span="24" class="main">
			<aside class="leftNav">
				<!--展开折叠开关-->
		        <div class="menu-toggle" @click.prevent="collapse">
		          <i class="iconfont icon-menufold" v-show="!collapsed"></i>
		          <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
		        </div>
				<el-menu default-active="1-1" class="el-menu-vertical-demo" :collapse="collapsed" @open="handleOpen" @close="handleClose"  background-color="#333744"
      text-color="#fff">
				  <el-submenu index="1">
				    <template slot="title">
				      <i class="el-icon-location"></i>
				      <span slot="title">采购</span>
				    </template>
				      <el-menu-item index="1-1">采购1</el-menu-item>
				      <el-menu-item index="1-2">采购2</el-menu-item>
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
				  </el-submenu>
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
        collapsed: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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
		 
		 .el-menu{border-right:none}
		 .el-menu-item.is-active{background-color:#00C1DE!important;color:#FFF}
		 .el-menu .el-menu-item{
	        height: 46px;
	        line-height: 46px;
	      }
	      .el-submenu .el-menu-item:hover{
	        background-color: #7ed2df!important;
	      }
	}

	.rightContent{width:auto;height:100%;margin-left:180px;box-sizing:border-box;
		  background: #fff;
	      flex: 1;
	      overflow-y: auto;
	      padding: 10px;
	      padding-bottom: 1px;
	}

}
</style>