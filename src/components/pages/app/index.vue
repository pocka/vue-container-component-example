<script>
import AppLayout from '~/components/templates/app-layout'

import AllTodos from '~/containers/all-todos'
import NewTodo from '~/containers/new-todo'

export default {
  components: { AppLayout, NewTodo, AllTodos }
}
</script>

<template>
  <app-layout>
    <new-todo/>
    <all-todos/>
  </app-layout>
</template>
