<template>
  <div class="index-page">
    <Hero />
    <div class="wrapper">
      <About />
      <Licence />
      <AutoPark />
      <Contacts />
    </div>
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
import AutoPark from '@/components/pages/index/AutoPark'
import Contacts from '@/components/pages/index/Contacts'
import VueScrollTo from 'vue-scrollto'

export default {
  components: { Hero, About, Licence, AutoPark, Contacts },
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

.wrapper {
  width: 100%;
  max-width: 1100px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
