import { AppendTodo, CompleteTodo } from './actionTypes'

import { SetTodos } from './mutationTypes'

const actions = {
  async [AppendTodo]({ commit, state }, todo) {
    commit(SetTodos, [...state.todos, todo])
  },
  async [CompleteTodo]({ commit, state }, todo) {
    const updated = state.todos.filter(t => t !== todo)

    commit(SetTodos, updated)
  }
}

export default actions
