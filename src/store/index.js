import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search:'',
    location:'天津市',
    infantNum:0,
    peopleNums:0,
    startdate:'',
    enddate:''
  },
  mutations: {
    changeSearch(state,payload){
      state.search = payload.search
    },
    changeCity(state,payload){
      state.location = payload.location
    },
    changePeople(state,payload){
      state.infantNum = payload.infantNum
      state.peopleNums = payload.peopleNums
    },
    changeDate(state,payload){
      state.startdate = payload.startdate
      state.enddate = payload.enddate
    }
  },
  actions: {
  },
  modules: {
  }
})
