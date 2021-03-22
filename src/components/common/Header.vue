<template>
  <div id="header">
    <div class="logo">Eco one</div>
    <div class="menu">
      <a
        v-for="item in links"
        :key="item.id"
        :href="item.scrollTo"
        class="link-item"
        @click.prevent="scrollTo(item.scrollTo)"
      >
        {{ item.label }}
      </a>
    </div>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  data: () => ({
    links: [
      {
        id: 1,
        scrollTo: '#about',
        label: 'О компании',
      },
      {
        id: 2,
        scrollTo: '#licence',
        label: 'Лицензии',
      },
      {
        id: 3,
        scrollTo: '#autopark',
        label: 'Автопарк',
      },
      {
        id: 4,
        scrollTo: '#autopark',
        label: 'Услуги',
      },
      {
        id: 5,
        scrollTo: '#contacts',
        label: 'Контакты',
      },
    ],
  }),
  methods: {
    scrollTo(id) {
      const domElement = document.querySelector(id)
      if (process.browser && domElement) {
        VueScrollTo.scrollTo(domElement, 600, {
          offset: 0,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  width: 100%;
}
.menu {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.link-item {
  position: relative;
  padding: 15px 14px 11px;
  font-size: 12px;
  color: #6f9cb7;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 0;
    background-color: #0a86cc;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    color: #0a86cc;
    &:after {
      opacity: 1;
    }
  }
}
</style>
