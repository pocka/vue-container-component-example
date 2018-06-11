<script>
export default {
  props: {
    size: {
      validator(value) {
        return ['normal', 'small'].includes(value)
      },
      default: () => 'normal'
    },
    disabled: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    onClick(ev) {
      if (this.disabled) {
        return
      }

      this.$emit('click', ev)
    }
  }
}
</script>

<template>
  <a
    @click="onClick"
    role="button"
    :class="[$style.button, $style[size], disabled && $style.disabled]"
  >
    <slot/>
  </a>
</template>

<style module>
.button {
  /* layouts */
  display: inline-block;

  /* appearance */
  color: #777;
  background-color: #fdfdfd;
  border: 1px solid #ccc;
  border-radius: 3px;

  /* misc */
  font-family: 'roboto', sans-serif;
  text-align: center;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  cursor: pointer;

  /* animations */
  transition: background-color 0.2s ease;
}

.button:hover:not(.disabled) {
  background-color: #fefefe;
}

.button:active:not(.disabled) {
  background-color: #fbfbfb;
}

.normal {
  padding: 22px 5px;
  font-size: 20px;
  width: 200px;
}

.small {
  padding: 12px 2em;
  font-size: 16px;
  width: auto;
}

.disabled {
  color: #ccc;
  cursor: not-allowed;
}
</style>
