<template>
  <el-row class="warp">
    <el-col :span="8">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in imagesbox" :key="item">
           <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>


<script> 
  export default{
    data(){
      return {
        imagesbox:[{id:0,idView:require("../assets/images/forest.png")},      {id:1,idView:require("../assets/images/sunrise.png")},

{id:2,idView:require("../assets/images/sunshine.png")}]
      }
    },
    methods: {
      
    },
    mounted() {
    }
  }
</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
</style>
