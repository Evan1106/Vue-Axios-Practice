import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'John',
    age: 55,
    job: 'teacher'
  },
  getters: {
    title(state){
      return `${state.name}: ${state.job}`
    }
  },
  //同步執行，使用關鍵字commit
  mutations: {
    setTitle(state, data){
      state.name = data.name
      state.job = data.job
    }
  },
  //非同步執行，使用關鍵字dispatch
  actions: {
  },
  modules: {
  }
})
