import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:'',
    list: []
  },
  
  mutations: {
    addItem(state, value) {
      state.list.push(value)
    },
    delOne(state,index){
      state.list.splice(index,1)
    },
    setUser(state,name){
      state.user=name
    },
    setList(state,arr){
      state.list=arr
    }


  },
  actions: {

  }
})
