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
          Автотранспортный парк, эксплуатируемый группой компаний «ЭКО», насчитывает 17 единиц мусоровозного спецтранспорта и состоит из: Мусоровозов с задней загрузкой, Портальных мусоровозов, Бункеровозов, Мультилифтов, Передвижной технички.
        `,
      },
      {
        id: 1,
        text: `
          Навесное оборудование эксплуатируемого спецтранспорта таких фирм-производителей, как Geesinknorba, McNeilus, Faun размещены на шасси автомобильных концернов Volvo и MAN - 95% от общего количества и 5% на шасси отечественного производителя – КамАЗ и МАЗ.
        `,
      },
      {
        id: 2,
        text: `
          Весь спецтранспорт соответствует стандартам Евро-4 и Евро-5, оснащен системой глобального позиционирования «ГЛОНАСС» и видиорегистраторами с целью передачи, в режиме реального времени, данных о своевременном и качественном оказании услуг в информационные системы заказчиков.
        `,
      },
      {
        id: 3,
        text: `
          Имеется возможность оперативно привлечь дополнительную технику до 30 ед. от компаний-партнеров (суммарный парк более 100 ед. спецтехники и механизмов, в том числе погрузчики, илососы и самосвалы). 
        `,
      },
      {
        id: 4,
        text: `
          На территории автобазы группы компаний «ЭКО», расположена ремзона, оборудованная смотровыми ямами, подъемниками и т.д.  Вся имеющаяся мусоровозная техника проходит профилактические осмотры перед выходом на маршруты. Неисправные автомобили в рейс не выпускаются. Все водители и грузчики перед выходом в рейс, а также рабочий персонал проходят обязательное медицинское освидетельствование.
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
