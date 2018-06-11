import { connect } from 'vuex-connect'

import TodoList from '~/components/organisms/todo-list'

import { Todos, CompleteTodo } from '~/store/modules/todo'

export default connect({
  gettersToProps: {
    todos: Todos
  },
  methodsToEvents: {
    complete: ({ dispatch }, todo) => dispatch(CompleteTodo, todo)
  }
})('all-todos', TodoList)
