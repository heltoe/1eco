<template>
  <div id="autopark">
    <TitleBlock>Автропарк</TitleBlock>
    <div class="content">
      <div class="slider" />
      <p class="text">123123123123123123</p>
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
}
.slider {
  height: 200px;
  width: 400px;
  margin-right: auto;
  background-color: grey;
}
</style>
