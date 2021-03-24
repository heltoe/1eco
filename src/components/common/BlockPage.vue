<template>
  <div :class="{ block: true, colored }">
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colored: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.wrapper {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}
.colored {
  background: #e5eff8;
}
</style>
