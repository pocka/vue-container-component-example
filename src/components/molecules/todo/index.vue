<script>
import BaseButton from '~/components/atoms/base-button'
import BaseText from '~/components/atoms/base-text'
import TodoRow from '~/components/atoms/todo-row'

export default {
  components: { BaseButton, BaseText, TodoRow },
  props: {
    todo: {
      type: String,
      required: true
    }
  },
  methods: {
    onComplete() {
      this.$emit('complete', this.todo)
    }
  }
}
</script>

<template>
  <todo-row>
    <base-text>{{todo}}</base-text>
    <base-button size="small" @click="onComplete">Done</base-button>
  </todo-row>
</template>
