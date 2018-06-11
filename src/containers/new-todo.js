import { connect } from 'vuex-connect'

import NewTodo from '~/components/molecules/new-todo'

import { AppendTodo } from '~/store/modules/todo'

export default connect({
  methodsToEvents: {
    append: ({ dispatch }, todo) => dispatch(AppendTodo, todo)
  }
})('new-todo', NewTodo)
