<template>
  <div class="hero">
    <div class="text-block">
      <p>
        Группа компаний «ЭКО» оказывает услуги по транспортированию отходов на
        территории РФ с 2010 года и осуществляет свою деятельность на
        территориях города Москвы, Московской области, а также по разовым
        договорам в других регионах РФ.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 63.6px);
  width: 100%;
}
.text-block {
  border-radius: 5px;
  padding: 20px;
  z-index: 10;
  position: relative;
  width: 100%;
  max-width: 640px;
}
p {
  font-size: 32px;
  font-weight: bold;
  line-height: 1.2;
  width: 100%;
  text-align: center;
  color: #fff;
}
</style>
