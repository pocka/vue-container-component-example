<script>
import BaseText from '~/components/atoms/base-text'
import BaseTitle from '~/components/atoms/base-title'

import pkg from '~/../package.json'

export default {
  components: { BaseText, BaseTitle },
  data() {
    return {
      repositoryURI: pkg.repository.url.replace(/^git\+(.*)\.git$/, '$1')
    }
  }
}
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.column">
      <base-title>ToDo</base-title>
      <slot/>
      <div :class="$style.footer">
        <a
          :href="repositoryURI"
          target="_blank"
          rel="noopener"
        >
          <base-text>pocka/vue-container-component-example</base-text>
        </a>
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  /* layouts */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.column {
  /* layouts */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 720px;
  min-height: 100%;
  padding: 0 10px;
}

.column > :first-child {
  margin-top: 36px;
}

.column > :last-child {
  padding-bottom: 36px;
}

.column > :not(:first-child) {
  margin-top: 48px;
}

.footer {
  display: block;
  text-align: center;
}

.footer > a {
  text-decoration-color: #777;
}
</style>
