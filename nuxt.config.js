process.env.DOMAIN = process.env.DOMAIN || 'http://localhost:3000'

export default {
  srcDir: 'src',
  env: {
    DOMAIN: process.env.DOMAIN,
  },
  head: {
    title: '1ECO',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [{ src: '~/plugins/vue-scroll-to', ssr: false }],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
}
