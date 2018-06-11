import { storiesOf } from '@storybook/vue'

import { action } from '@storybook/addon-actions'

import TodoList from './'

storiesOf('Organisms/todo-list', module).add('A list of todos', () => ({
  components: { TodoList },
  data() {
    return {
      todos: ['foo', 'bar', 'baz']
    }
  },
  methods: {
    complete: action('complete')
  },
  template: `<todo-list @complete="complete" :todos="todos"/>`
}))
