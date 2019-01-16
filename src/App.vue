<template>
  <div id="app">
      <router-view></router-view>
  </div>

</template>
 <script>
    export default {
      name: 'app'
    }
  </script>
<style>
body{
  padding:0px;
  margin:0px auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.el-submenu .el-submenu__title {
    height: 46px;
    line-height: 46px;
  }
.el-submenu__title:hover {
      background-color: #7ed2df!important;
    }
</style>