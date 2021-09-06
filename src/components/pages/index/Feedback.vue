<template>
  <div id="feedback">
    <TitleBlock>Обратная связь</TitleBlock>
    <div class="content">
      <form class="block" @submit.prevent="submit">
        <p class="title-block">Напишите нам</p>
        <FormInput
          v-model="form.fullName"
          label="ФИО*"
          :error="errors.fullName"
          @focus="errors.fullName = ''"
        />
        <FormInput
          v-model="form.email"
          label="Email*"
          :error="errors.email"
          @focus="errors.email = ''"
        />
        <FormInput v-model="form.message" textarea label="Сообщение" />
        <Button class="btn" :disabled="isDisabled">Отправить</Button>
      </form>
      <div class="block">
        <p class="title-block">Как связаться</p>
        <a href="tel:+7933989898" class="link-block">
          <p class="block__title">Телефон</p>
          <p class="block__value">+7 (933) 98 98 98</p>
        </a>
        <a href="mailto:1eco@gmail.com" class="link-block">
          <p class="block__title">Email</p>
          <p class="block__value">1eco@gmail.com</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBlock from '@/components/common/TitleBlock'
import FormInput from '@/components/ui/FormInput'
import Button from '@/components/ui/Button'

export default {
  components: { TitleBlock, FormInput, Button },
  data: () => ({
    form: {
      fullName: '',
      email: '',
      message: '',
    },
    errors: {
      fullName: '',
      email: '',
    },
  }),
  computed: {
    isDisabled() {
      return Object.values(this.errors).filter((item) => item.length).length > 0
    },
  },
  methods: {
    isErrorValidate() {
      const requiredMessage = 'Поле обязательно к заполнению'
      const invalidEmail = 'Введите корректный email'
      if (!this.form.fullName.length) this.errors.fullName = requiredMessage
      if (!this.form.email.length) this.errors.email = requiredMessage
      if (this.form.email.length) {
        // eslint-disable-next-line
        const ruleEmailValue = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!ruleEmailValue.test(this.form.email))
          this.errors.email = invalidEmail
      }
      return Object.values(this.errors).filter((item) => item.length).length > 0
    },
    submit() {
      if (this.isErrorValidate()) return
      console.log(this.form)
    },
  },
}
</script>

<style lang="scss" scoped>
#feedback {
  display: flex;
  flex-direction: column;
  padding: 40px 0;
}
.content {
  display: flex;
  justify-content: space-around;
}
.block {
  & .form-input {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
}
form {
  width: 500px;
}
.title-block {
  font-weight: bold;
  font-size: 20px;
  color: #253036;
}
.link-block {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: #000;
  &:not(:first-child) {
    margin-top: 20px;
  }
  &:hover {
    .block__value {
      color: #0a86cc;
    }
  }
}
.block__title {
  font-size: 20px;
}
.block__value {
  margin-top: 10px;
  font-weight: 600;
  transition: 0.3s color ease-in-out;
  font-size: 20px;
}
.btn {
  margin-top: 20px;
}
</style>
