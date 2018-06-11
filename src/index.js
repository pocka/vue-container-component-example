import 'babel-polyfill'

import Vue from 'vue'

import App from '~/components/pages/app'

import store from './store'

new Vue({
  components: { App },
  el: '#app',
  render(h) {
    return h(App)
  },
  store
})
