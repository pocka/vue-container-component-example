import { storiesOf } from '@storybook/vue'

import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Todo from './'

storiesOf('Molecules/todo', module)
  .addDecorator(withKnobs)
  .add('Todo component', () => ({
    components: { Todo },
    methods: {
      complete: action('complete')
    },
    template: `<todo @complete="complete" todo="${text('Todo', 'To do')}"/>`
  }))
