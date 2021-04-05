<template>
  <div class="slider-wrapper">
    <div
      v-swiper:swiper="swiperOption"
      class="slider"
      @slideChange="changeIndex()"
    >
      <div class="swiper-wrapper">
        <!-- v-for="item in slides" -->
        <!-- :key="item.id" -->
        <div
          :style="{ backgroundImage: `url(/cars/slide1.jpg)` }"
          class="swiper-slide"
        />
        <div
          :style="{ backgroundImage: `url(/cars/slide2.png)` }"
          class="swiper-slide"
        />
        <div
          :style="{ backgroundImage: `url(/cars/slide3.jpg)` }"
          class="swiper-slide"
        />
        <div
          :style="{ backgroundImage: `url(/cars/slide4.jpg)` }"
          class="swiper-slide"
        />
        <div
          :style="{ backgroundImage: `url(/cars/slide5.png)` }"
          class="swiper-slide"
        />
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.css'

export default {
  name: 'Slider',
  data: () => ({
    active: 0,
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      speed: 800,
      keyboard: {
        enabled: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      // loop: true,
    },
  }),
  methods: {
    changeIndex() {
      this.active = this.swiper.activeIndex
      this.$emit('slideChange', this.active)
    },
  },
}
</script>

<style lang="scss" scoped>
.slider-wrapper {
  width: 500px;
  height: 300px;
  position: relative;
  overflow: hidden;
}
.swiper-wrapper {
  display: flex;
  height: 100%;
  align-items: center;
}
.swiper-container {
  height: 100%;
}
.swiper-slide {
  display: flex;
  flex-shrink: 0;
  border-radius: 5px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>
