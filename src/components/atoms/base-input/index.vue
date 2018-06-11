<script>
export default {
  props: {
    placeholder: {
      type: String
    },
    value: {
      type: String
    }
  },
  methods: {
    onInput(ev) {
      this.$emit('input', ev.target.value)
    }
  }
}
</script>

<template>
  <input
    :class="$style.input"
    :placeholder="placeholder"
    :value="value"
    @input="onInput"
  />
</template>

<style module>
.input {
  /* layouts */
  display: block;
  font-size: 20px;
  padding-bottom: 7px;
  padding-left: 1em;
  min-width: 1px;

  /* appearance */
  background: none;
  border: none;
  border-bottom: 1px solid #ccc;
  color: #777;

  /* animations */
  transition: border-color 0.2s ease;
}

.input:focus {
  border-color: #aaa;
}

.input:placeholder-shown {
  color: #ccc;
}
</style>
