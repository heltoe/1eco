<template>
  <div id="licence">
    <TitleBlock>Лицензии и документы</TitleBlock>
    <div class="content">
      <div class="file-element">
        <p class="title-file">Название файла</p>
        <div class="preview-file" />
        <div class="download-file">
          <p class="download-file__text">Скачать документ</p>
        </div>
      </div>
      <div class="file-element">
        <p class="title-file">Название файла</p>
        <div class="preview-file" />
        <div class="download-file">
          <p class="download-file__text">Скачать документ</p>
        </div>
      </div>
      <div class="file-element">
        <p class="title-file">Название файла</p>
        <div class="preview-file" />
        <div class="download-file">
          <p class="download-file__text">Скачать документ</p>
        </div>
      </div>
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
#licence {
  display: flex;
  flex-direction: column;
  padding: 40px 0;
}
.content {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.file-element {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  width: 200px;
}
.title-file {
  font-weight: bold;
  font-size: 20px;
  color: #253036;
}
.preview-file {
  margin-top: 10px;
  width: 100%;
  height: 200px;
  background-color: grey;
}
.download-file {
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  cursor: pointer;
}
.download-file__text {
  font-weight: 500;
  font-size: 15px;
  color: #6f9cb7;
  margin-right: 10px;
}
</style>
