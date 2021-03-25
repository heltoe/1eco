<template>
  <div class="app">
    <BlockPage>
      <Header />
    </BlockPage>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import BlockPage from '@/components/common/BlockPage'

export default {
  components: { Header, BlockPage, Footer },
}
</script>

<style lang="scss">
@import '~/assets/entry.scss';
</style>
