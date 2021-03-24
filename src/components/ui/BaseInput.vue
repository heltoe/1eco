<template>
  <input
    v-bind="$props"
    class="ui-input"
    :type="type"
    v-on="{
      ...$listeners,
      input: (event) => $emit('input', event.target.value),
    }"
  />
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-input {
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #cccccc;
  padding: 17px 11px 16px 18px;
  outline: none;
  font-size: 16px;
  font-weight: normal;
  color: #0f2345;
  font-family: 'ProximaNova';
  transition: 0.3s ease-in-out;
  &::placeholder {
    font-family: 'ProximaNova';
    font-size: 14px;
    color: #dddddd;
    opacity: 1;
  }
}
</style>
