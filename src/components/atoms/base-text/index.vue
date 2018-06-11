<template>
  <span :class="$style.text"><slot/></span>
</template>

<style module>
.text {
  /* layouts */
  font-size: 20px;

  /* appearance */
  color: #777;

  /* misc */
  font-family: 'robot', sans-serif;
}
</style>
