<template>
  <label class="form-input">
    <p class="label">{{ label }}</p>
    <transition name="fade">
      <p v-if="error.length" class="feedback-input">
        {{ error }}
      </p>
    </transition>
    <BaseInput
      v-if="!textarea"
      v-bind="$props"
      :class="{ error: error.length }"
      :readonly="readonly"
      @input="focused('input', $event)"
      @focus="focused('focus', $event)"
      @change="$emit('change', $event)"
    />
    <TextArea
      v-else
      v-bind="$props"
      :class="{ error: error.length }"
      @input="focused('input', $event)"
      @focus="focused('focus', $event)"
      @click="focused('click', $event)"
    />
  </label>
</template>

<script>
import BaseInput from '@/components/ui/BaseInput'
import TextArea from '@/components/ui/TextArea'

export default {
  name: 'FormInput',
  components: { BaseInput, TextArea },
  props: {
    textarea: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },
  methods: {
    focused(eventName, event) {
      this.$emit(eventName, event)
      this.$emit('focused')
    },
  },
}
</script>

<style lang="scss" scoped>
.form-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
}

.feedback-input {
  position: absolute;
  bottom: -20px;
  right: 0;
  width: 100%;
  font-size: 12px;
  text-align: right;
  color: #ee2231;
}

.label {
  margin-bottom: 5px;
  font-weight: 600;
}

.error {
  border: solid 1px #ee2231;
  box-shadow: 0px 0px 5px 0 #ee2231;
  color: #ee2231;
}

// vue-animation
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
