<script>
import Todo from '~/components/molecules/todo'

export default {
  components: { Todo },
  props: {
    todos: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onComplete(todo) {
      this.$emit('complete', todo)
    }
  }
}
</script>

<template>
  <div :class="$style.container">
    <todo
      v-for="todo in todos"
      :key="todo"
      :todo="todo"
      @complete="t => onComplete(t)"
    />
  </div>
</template>

<style module>
.container > :not(:first-child) {
  margin-top: 4em;
}
</style>

