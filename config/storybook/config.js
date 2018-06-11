import { configure } from '@storybook/vue'

const req = require.context('../../src/components', true, /\.?stories\.js$/)

function loadStories() {
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)
