import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
   count: 0,
   hahaha:"Hello Vuex"
  },
  mutations:{
  	add(state,n){
  		state.count+=n;
  	},
  	reduce(state){
  		state.count--;
  	}
  },
  getters:{
  	count:function(state){
  		return state.count+=300;
  	}
  },
  actions:{
  	addAction({commit}){
  		commit("add",10);
  	},
  	reduceAction({commit}){
  		commit("reduce");
  	}
  }
 })
 export default store;
