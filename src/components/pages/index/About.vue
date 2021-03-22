<template>
  <div id="about">
    <TitleBlock>О компании</TitleBlock>
    <div class="content">
      <p class="text">fadfsdfsdf dfsdfsdfs</p>
      <div class="image" />
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
}
.image {
  height: 200px;
  width: 400px;
  margin-left: auto;
  background-color: grey;
}
</style>
