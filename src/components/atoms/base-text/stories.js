import { storiesOf } from '@storybook/vue'

import { withKnobs, text } from '@storybook/addon-knobs'

import BaseText from './'

storiesOf('Atoms/base-text', module)
  .addDecorator(withKnobs)
  .add('A basic text', () => ({
    components: { BaseText },
    template: `<base-text>${text('Text', 'Text')}</base-text>`
  }))
