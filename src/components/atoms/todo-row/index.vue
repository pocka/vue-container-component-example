<template>
  <div :class="$style.container">
    <slot/>
  </div>
</template>

<style module>
.container {
  /* layouts */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container > :first-child:not(:last-child) {
  flex-grow: 1;
  margin-right: 1em;
}
</style>

