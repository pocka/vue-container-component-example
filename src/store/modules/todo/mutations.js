import { SetTodos } from './mutationTypes'

const mutations = {
  [SetTodos](state, todos) {
    state.todos = todos
  }
}

export default mutations
