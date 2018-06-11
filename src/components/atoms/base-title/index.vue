<template>
  <span :class="$style.title"><slot/></span>
</template>

<style module>
.title {
  /* layouts */
  display: block;
  font-size: 28px;

  /* appearance */
  color: #666;

  /* misc */
  font-family: 'roboto', sans-serif;
  text-align: center;
}
</style>
