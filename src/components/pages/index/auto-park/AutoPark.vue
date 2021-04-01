<template>
  <div id="autopark">
    <TitleBlock>Автропарк</TitleBlock>
    <div class="content">
      <Slider @slideChange="activeSlide = $event" />
      <div class="wrapper">
        <p
          v-for="item in textSlide"
          :key="item.id"
          :class="{
            text: true,
            'is-active': activeSlide === item.id,
            'is-passive': activeSlide !== item.id,
          }"
        >
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBlock from '@/components/common/TitleBlock'
import Slider from '@/components/pages/index/auto-park/Slider'

export default {
  components: { TitleBlock, Slider },
  data: () => ({
    activeSlide: 0,
    textSlide: [
      {
        id: 0,
        text: `
          1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil
          blanditiis animi, deleniti molestias culpa nisi! Ipsum quod, possimus
          ipsam quisquam placeat tempora quas ipsa dicta eveniet accusantium
          reprehenderit totam! Lorem ipsum dolor sit, amet consectetur
          adipisicing. Amet nihil blanditiis animi, deleniti molestias culpa
          nisi! Ipsum quod, possimus ipsam quisquam placeat tempora quas ipsa
          dicta eveniet accusantium reprehenderit totam!
        `,
      },
      {
        id: 1,
        text: `
          2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil
          blanditiis animi, deleniti molestias culpa nisi! Ipsum quod, possimus
          ipsam quisquam placeat tempora quas ipsa dicta eveniet accusantium
          reprehenderit totam! Lorem ipsum dolor sit, amet consectetur
          adipisicing. Amet nihil blanditiis animi, deleniti molestias culpa
          nisi! Ipsum quod, possimus ipsam quisquam placeat tempora quas ipsa
          dicta eveniet accusantium reprehenderit totam!
        `,
      },
      {
        id: 2,
        text: `
          3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil
          blanditiis animi, deleniti molestias culpa nisi! Ipsum quod, possimus
          ipsam quisquam placeat tempora quas ipsa dicta eveniet accusantium
          reprehenderit totam! Lorem ipsum dolor sit, amet consectetur
          adipisicing. Amet nihil blanditiis animi, deleniti molestias culpa
          nisi! Ipsum quod, possimus ipsam quisquam placeat tempora quas ipsa
          dicta eveniet accusantium reprehenderit totam!
        `,
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
#autopark {
  display: flex;
  flex-direction: column;
  padding: 40px 0;
}
.content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.wrapper {
  margin-left: 20px;
  max-width: 500px;
  width: 100%;
  font-size: 16px;
  line-height: 1.2;
  position: relative;
}
.text {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  opacity: 0;
  transition: 0.6s ease-in-out;
}
.is-active {
  animation: fade-in 0.3s ease-in-out 0.6s;
  animation-fill-mode: both;
}
.is-passive {
  animation: fade-out 0.3s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
