<template>
  <button v-bind="$attrs" class="button" v-on="$listeners">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  // fix select
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
}
</style>
