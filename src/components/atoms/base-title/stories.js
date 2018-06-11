import { storiesOf } from '@storybook/vue'

import { withKnobs, text } from '@storybook/addon-knobs'

import BaseTitle from './'

storiesOf('Atoms/base-title', module)
  .addDecorator(withKnobs)
  .add('A title', () => ({
    components: { BaseTitle },
    template: `<base-title>${text('Title', 'Title')}</base-title>`
  }))
