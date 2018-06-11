import { storiesOf } from '@storybook/vue'

import AppLayout from './'

storiesOf('Templates/app-layout', module).add('A layout of app', () => ({
  components: { AppLayout },
  template: `<app-layout>foo<br/>bar</app-layout>`
}))
