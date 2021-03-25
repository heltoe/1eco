<template>
  <div id="autopark">
    <TitleBlock>Автропарк</TitleBlock>
    <div class="content">
      <Slider />
      <p class="text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil
        blanditiis animi, deleniti molestias culpa nisi! Ipsum quod, possimus
        ipsam quisquam placeat tempora quas ipsa dicta eveniet accusantium
        reprehenderit totam! Lorem ipsum dolor sit, amet consectetur
        adipisicing. Amet nihil blanditiis animi, deleniti molestias culpa nisi!
        Ipsum quod, possimus ipsam quisquam placeat tempora quas ipsa dicta
        eveniet accusantium reprehenderit totam!
      </p>
    </div>
  </div>
</template>

<script>
import TitleBlock from '@/components/common/TitleBlock'
import Slider from '@/components/pages/index/auto-park/Slider'

export default {
  components: { TitleBlock, Slider },
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
.text {
  margin-left: 20px;
  max-width: 500px;
  font-size: 16px;
  line-height: 1.2;
}
.slider {
  height: 200px;
  width: 400px;
  margin-right: auto;
  background-color: grey;
}
</style>
