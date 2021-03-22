<template>
  <div class="wrapper">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'

export default {
  components: { Header },
}
</script>

<style lang="scss" scoped>
@import '~/assets/entry.scss';

.wrapper {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
