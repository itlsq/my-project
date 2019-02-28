<template>
    <el-row>
       <el-col :span="24">
       		<div>{{$store.state.count}}--{{count}}--{{hahaha}}</div>
			<button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
    		<button @click="sendToParent">-</button>
        <div>{{this.fuValue}}</div>
       	</el-col>
    </el-row>

</template>
<style>
  
</style>

<script>
let arr=['北大','清华','北航'];
console.log(arr.map(x=>"web"));
console.log(arr);
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {
        msg:"我的值来自authority1子组件"
      };
    },
    props:['fuValue'],
    computed:{
    	...mapState(['count','hahaha']),
    	...mapGetters(['count'])
    },
    methods:{
      sendToParent(){
        this.$emit("sendToParent",this.msg);
      },
    	...mapMutations(['add','reduce']),
    	...mapActions(['addAction','reduceAction'])
    },
    mounted:{
     
    }
  }
</script>
