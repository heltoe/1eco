<template>
  <div ref="container" class="app">
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
  mounted(){
    this.timer = setInterval(this.iframeHeightNotify,300)
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods:{
    iframeHeightNotify() {
      const msg = {
        height: this.$refs.container.scrollHeight
      }
      window.parent.postMessage(msg, '*')
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/entry.scss';
</style>
