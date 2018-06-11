<script>
import BaseButton from '~/components/atoms/base-button'
import BaseInput from '~/components/atoms/base-input'
import TodoRow from '~/components/atoms/todo-row'

export default {
  components: { BaseButton, BaseInput, TodoRow },
  data() {
    return {
      todo: ''
    }
  },
  computed: {
    canAppend() {
      return !!this.todo
    }
  },
  methods: {
    onAppend() {
      this.$emit('append', this.todo)

      this.todo = ''
    }
  }
}
</script>

<template>
  <todo-row>
    <base-input v-model="todo" placeholder="Do something"/>
    <base-button
      size="small"
      :disabled="!canAppend"
      @click="onAppend"
    >
      Append
    </base-button>
  </todo-row>
</template>

