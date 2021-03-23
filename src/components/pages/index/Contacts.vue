<template>
  <div id="contacts">
    <TitleBlock>О компании</TitleBlock>
    <div class="content">
      <form class="block">
        <p class="title-block">Напишите нам</p>
        <FormInput v-model="fullName" label="ФИО" :error="errors.fullName" />
        <FormInput v-model="email" label="Email" :error="errors.email" />
        <FormInput
          v-model="email"
          textarea
          label="Сообщение"
          :error="errors.email"
        />
        <Button class="btn">Отправить</Button>
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
    fullName: '',
    email: '',
    errors: {
      fullName: 'Поле обязательно',
      email: '',
    },
  }),
}
</script>

<style lang="scss" scoped>
#contacts {
  display: flex;
  flex-direction: column;
  padding: 40px 0;
}
.content {
  display: flex;
  justify-content: space-between;
}
.block {
  display: flex;
  flex-direction: column;
  & .form-input {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
}
.title-block {
  font-weight: bold;
  font-size: 20px;
  color: #253036;
}
.link-block {
  cursor: pointer;
  color: #000;
  &:not(:first-child) {
    margin-top: 20px;
  }
}
.block__value {
  margin-top: 10px;
  font-weight: 600;
}
.btn {
  margin-top: 20px;
}
</style>
