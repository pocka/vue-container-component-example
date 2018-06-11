import Vue from 'vue'
import Vuex from 'vuex'

import todoModule from './modules/todo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    todo: todoModule
  }
})

export default store
