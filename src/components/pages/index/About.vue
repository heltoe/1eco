<template>
  <div id="about">
    <TitleBlock>О компании</TitleBlock>
    <div class="content">
      <p class="text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nihil
        blanditiis animi, deleniti molestias culpa nisi! Ipsum quod, possimus
        ipsam quisquam placeat tempora quas ipsa dicta eveniet accusantium
        reprehenderit totam! Lorem ipsum dolor sit, amet consectetur
        adipisicing. Amet nihil blanditiis animi, deleniti molestias culpa nisi!
        Ipsum quod, possimus ipsam quisquam placeat tempora quas ipsa dicta
        eveniet accusantium reprehenderit totam!
      </p>
      <img src="/hero.jpg" alt="about" class="image" />
    </div>
  </div>
</template>

<script>
import TitleBlock from '@/components/common/TitleBlock'

export default {
  components: { TitleBlock },
}
</script>

<style lang="scss" scoped>
#about {
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
  margin-right: 20px;
  max-width: 500px;
  font-size: 16px;
  line-height: 1.2;
}
.image {
  height: 200px;
  width: 400px;
  margin-left: auto;
  background-color: grey;
  border-radius: 5px;
  object-fit: cover;
}
</style>
