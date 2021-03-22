<template>
  <div id="contacts">
    <TitleBlock>О компании</TitleBlock>
    <div class="content">
      <form class="block">
        <p class="title-block">Напишите нам</p>
        <label class="label-block">
          <p class="block__title">Фио</p>
          <FormInput v-model="fullName" />
        </label>
        <label class="label-block">
          <p class="block__title">Email</p>
          <FormInput v-model="email" />
        </label>
        <label class="label-block">
          <p class="block__title">Сообщение</p>
          <FormInput v-model="email" />
        </label>
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
import FormInput from '@/components/ui/BaseInput'
import Button from '@/components/ui/Button'

export default {
  components: { TitleBlock, FormInput, Button },
  data: () => ({
    fullName: '',
    email: '',
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
  margin-top: 20px;
}
.block {
  display: flex;
  flex-direction: column;
}
.title-block {
  font-weight: bold;
  font-size: 20px;
  color: #253036;
  margin-bottom: 20px;
}
.link-block {
  cursor: pointer;
  &:not(:first-child) {
    margin-top: 20px;
  }
}
.label-block {
  display: flex;
  flex-direction: column;
  &:not(:first-child) {
    margin-top: 20px;
  }
}
.btn {
  margin-top: 20px;
}
</style>
