<template>
  <div class="app">
    <BlockPage>
      <Header />
    </BlockPage>
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import BlockPage from '@/components/common/BlockPage'

export default {
  components: { Header, BlockPage },
}
</script>

<style lang="scss">
@import '~/assets/entry.scss';
</style>
