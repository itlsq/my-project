<template>
    <el-row>
       <el-col :span="24">
       		<div>{{$store.state.count}}--{{count}}--{{hahaha}}</div>
			<button @click="addAction">+</button>
    		<button @click="reduceAction">-</button>
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
      
      };
    },
    computed:{
    	...mapState(['count','hahaha']),
    	...mapGetters(['count'])
    },
    methods:{
    	...mapMutations(['add','reduce']),
    	...mapActions(['addAction','reduceAction'])
    }
  }
</script>
