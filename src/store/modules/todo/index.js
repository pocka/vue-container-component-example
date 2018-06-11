import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const store = {
  state() {
    return {
      todos: []
    }
  },
  actions,
  getters,
  mutations
}

export default store

export * from './actionTypes'
export * from './getterTypes'
export * from './mutationTypes'
