const appConfig = require('../webpack/webpack.config.js')

const { module: $module, plugins, resolve } = appConfig

module.exports = {
  module: {
    ...$module,
    rules: $module.rules.filter(rule => !rule.loader.includes('vue-loader'))
  },
  plugins,
  resolve: {
    ...resolve,
    alias: {
      ...resolve.alias,
      vue$: 'vue/dist/vue.esm.js'
    }
  }
}
