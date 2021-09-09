import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      user: {
        id: 0,
        name: ''
      },
  },
  mutations: {
    SET_LOGIN (state, value) {
      state.user.id = value
    },
    SET_PASS (state, value) {
      state.user.name = value
    }
  },
  actions: {},
  modules: {}
})