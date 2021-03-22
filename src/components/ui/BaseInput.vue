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
