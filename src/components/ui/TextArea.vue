<template>
  <textarea
    v-bind="$props"
    @input="$emit('input', $event.target.value)"
    @keydown="$emit('keydown', $event)"
    @focus="$emit('focus', $event)"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: 'Введите текст',
    },
    value: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
textarea {
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 17px 11px 16px 18px;
  outline: none;
  font-family: 'ProximaNova';
  font-size: 16px;
  color: #0f2345;
  height: 135px;
  resize: none;
  transition: 0.3s ease-in-out;
  &::placeholder {
    font-family: 'ProximaNova';
    font-size: 14px;
    color: #dddddd;
    opacity: 1;
  }
}
</style>
