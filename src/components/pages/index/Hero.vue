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
  align-items: flex-end;
  justify-content: flex-end;
  height: calc(100vh - 63.6px);
  width: 100%;
}
.text-block {
  border-radius: 5px;
  background-color: #fff;
  padding: 20px;
  z-index: 10;
  position: relative;
  width: 100%;
  max-width: 370px;
  margin-bottom: 80px;
}
p {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  width: 100%;
}
</style>
