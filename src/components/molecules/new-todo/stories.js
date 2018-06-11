import { storiesOf } from '@storybook/vue'

import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import NewTodo from './'

storiesOf('Molecules/new-todo', module)
  .addDecorator(withKnobs)
  .add('Todo registration form', () => ({
    components: { NewTodo },
    methods: {
      append: action('append')
    },
    template: `<new-todo @append="append"/>`
  }))
