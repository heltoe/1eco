<template>
  <div class="app">
    <div class="wrapper">
      <Header />
    </div>
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'

export default {
  components: { Header },
}
</script>

<style lang="scss">
@import '~/assets/entry.scss';

.wrapper {
  width: 100%;
  max-width: 1100px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
