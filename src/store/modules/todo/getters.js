import { Todos } from './getterTypes'

const getters = {
  [Todos](state) {
    return state.todos
  }
}

export default getters
