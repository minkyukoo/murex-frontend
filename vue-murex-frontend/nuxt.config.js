import { defineNuxtConfig } from '@nuxt/bridge';
import i18n from './config/i18n.js';
export default defineNuxtConfig ({
  loading: '~/components/LoadingBar.vue',
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'vue-nuxt-pro',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'EN'
          },
          {
            code: 'fr',
            name: 'FR'
          },
          {
            code: 'kr',
            name: 'KO'
          }
        ],
        vueI18n: i18n
      }
    ],
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
  },
  styleResources: {
    scss: [
      '~assets/scss/general.scss',
      '~assets/scss/variables.scss',
      '~assets/scss/mixins.scss',
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  }
});
