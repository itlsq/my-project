<template>
  <el-row class="warp">
    <el-col :span="8">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,index) in imagesbox" :key="index">
           <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span=24>
        <el-button type="primary" @click="changeArr">主要按钮</el-button>
        <div>{{arr}}</div>
    </el-col>
    <authority1 :fuValue="fuValue" @sendToParent="sendToParent"></authority1>
    <div>{{msg}}</div>
  </el-row>
</template>


<script> 
 import authority1 from "../components/authority1.vue";
  export default{
    data(){
      return {
        imagesbox:[{id:0,idView:require("../assets/images/forest.png")},      {id:1,idView:require("../assets/images/sunrise.png")},

{id:2,idView:require("../assets/images/sunshine.png")}],
        arr:[1,2,3,4,2,1,5,3],
        fuValue:"我的值来自drug2父组件",
        msg:''
      }
    },
    methods: {
      changeArr(){
        this.$router.push({name:'药品2内部',params:{name:'张三',age:30}});
      },
      sendToParent(msg){
        this.msg=msg;
      }
    },
    components:{authority1},
    mounted() {
        var arr=[1,2,3,4,5];
        var result=0;
        arr.forEach(item=>result+=item);
        console.log(result)
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
