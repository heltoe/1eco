<template>
  <button v-bind="$attrs" class="button" v-on="$listeners">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0 30px;
  background-color: #0f2345;
  color: #fff;
  font-weight: 700;
  height: 40px;
  border-radius: 7px;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.3s opacity ease-in-out;
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
