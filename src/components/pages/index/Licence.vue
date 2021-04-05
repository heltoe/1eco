<template>
  <div id="licence">
    <TitleBlock>Лицензии и документы</TitleBlock>
    <div class="content">
      <div class="file-element">
        <p class="title-file">Лицензия с прил. 1-ЭКО</p>
        <img src="/hero.jpg" class="preview-file" alt="file" />
        <a
          href="/Лицензия_с_прил_1-ЭКО.pdf"
          target="_blank"
          class="download-file"
        >
          <p class="download-file__text">Скачать документ</p>
          <img src="/download.svg" alt="download" class="download-file__icon" />
        </a>
      </div>
      <div class="file-element">
        <p class="title-file">Благодарственное письмо от Хартии</p>
        <img src="/hero.jpg" class="preview-file" alt="file" />
        <a
          href="/Благодарственное_письмо_от_Хартии.docx"
          target="_blank"
          class="download-file"
        >
          <p class="download-file__text">Скачать документ</p>
          <img src="/download.svg" alt="download" class="download-file__icon" />
        </a>
      </div>
      <div class="file-element">
        <p class="title-file">Благодарственное письмо от Храма</p>
        <img src="/hero.jpg" class="preview-file" alt="file" />
        <a
          href="/Благодарственное_письмо_от_Храма.pdf"
          target="_blank"
          class="download-file"
        >
          <p class="download-file__text">Скачать документ</p>
          <img src="/download.svg" alt="download" class="download-file__icon" />
        </a>
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
  cursor: pointer;
  &:hover {
    .download-file__text {
      color: #0a86cc;
    }
  }
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
  border-radius: 5px;
  object-fit: cover;
}
.download-file {
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  cursor: pointer;
  outline: none;
}
.download-file__text {
  font-weight: 500;
  font-size: 15px;
  color: #6f9cb7;
  margin-right: 10px;
  transition: 0.3s color ease-in-out;
}
.download-file__icon {
  width: 20px;
  height: 20px;
}
</style>
