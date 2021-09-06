<template>
  <div class="index-page">
    <BlockPage colored class="hero-block">
      <Hero />
    </BlockPage>
    <BlockPage>
      <About />
    </BlockPage>
    <BlockPage colored>
      <Licence />
    </BlockPage>
    <BlockPage>
      <AutoPark />
    </BlockPage>
    <BlockPage colored>
      <Feedback />
    </BlockPage>
    <transition name="fade">
      <img
        v-if="scrollerIsShown"
        src="/arrow-up.svg"
        class="top-image"
        @click="scrollTo"
      />
    </transition>
  </div>
</template>

<script>
import Hero from '@/components/pages/index/Hero'
import About from '@/components/pages/index/About'
import Licence from '@/components/pages/index/Licence'
import AutoPark from '@/components/pages/index/auto-park/AutoPark'
import Feedback from '@/components/pages/index/Feedback'
import BlockPage from '@/components/common/BlockPage'
import VueScrollTo from 'vue-scrollto'

export default {
  components: {
    Hero,
    About,
    Licence,
    AutoPark,
    Feedback,
    BlockPage,
  },
  data: () => ({
    scrollerIsShown: false,
  }),
  mounted() {
    this.checkScroll()
    document.addEventListener('scroll', this.checkScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.checkScroll)
  },
  methods: {
    checkScroll() {
      this.scrollerIsShown = window.pageYOffset > 200
    },
    scrollTo() {
      const domElement = document.querySelector('#header')
      if (process.browser && domElement) {
        VueScrollTo.scrollTo(domElement, 600, {
          offset: 0,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.index-page {
  position: relative;
}
.top-image {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 20;
  width: 35px;
  height: 35px;
  cursor: pointer;
}
.hero-block {
  background-image: url('/hero1.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
