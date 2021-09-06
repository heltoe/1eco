<template>
  <div class="hero">
    <div class="text-block">
      <p>
        Группа компаний «ЭКО» оказывает услуги по транспортированию отходов на
        территории РФ с 2010 года и осуществляет свою деятельность на
        территориях города Москвы, Московской области, а также по разовым
        договорам в других регионах РФ.
        <br /><a href="tel:+7933989898">+7 (933) 98 98 98</a>
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
  a {
    font-size: 32px;
    font-weight: bold;
    line-height: 1.2;
    color: #fff;
    position: relative;
    transition: 0.3s ease-in-out;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #fff;
      width: 100%;
      height: 1px;
      transition: 0.3s ease-in-out;
    }
    &:hover {
      color: #0a86cc;
      &:after {
        background-color: #0a86cc;
      }
    }
  }
}
</style>
