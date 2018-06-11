import { storiesOf } from '@storybook/vue'

import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import BaseInput from './'

storiesOf('Atoms/base-input', module)
  .addDecorator(withKnobs)
  .add('A basic button', () => ({
    components: { BaseInput },
    methods: {
      input: action('input')
    },
    data() {
      return {
        value: ''
      }
    },
    template: `<base-input v-model="value" placeholder="${text(
      'Placeholder',
      'Placeholder'
    )}" @input="input"/>`
  }))
