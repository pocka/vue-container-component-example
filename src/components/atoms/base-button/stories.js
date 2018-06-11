import { storiesOf } from '@storybook/vue'

import { action } from '@storybook/addon-actions'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import BaseButton from './'

storiesOf('Atoms/base-button', module)
  .addDecorator(withKnobs)
  .add('A basic button', () => ({
    components: { BaseButton },
    methods: {
      click: action('click')
    },
    template: `<base-button size="${select(
      'Size',
      ['small', 'normal'],
      'normal'
    )}" :disabled="${boolean('Disabled', false)}" @click="click">${text(
      'Text',
      'Button'
    )}</base-button>`
  }))
