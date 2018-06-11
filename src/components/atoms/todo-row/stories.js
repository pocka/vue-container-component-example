import { storiesOf } from '@storybook/vue'

import TodoRow from './'

storiesOf('Atoms/todo-row', module).add('A todo row container', () => ({
  components: { TodoRow },
  template: `<todo-row>
      <div style="background-color: #f00">foo</div>
      <div style="background-color: #0f0">bar</div>
    </todo-row>`
}))
