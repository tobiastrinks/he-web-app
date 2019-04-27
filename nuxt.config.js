module.exports = {
  env: {
    /**
     * environment variables
     *
     * these variables must be set during the build-process!
     * Nuxt is injecting them using webpack to make them
     * usable on the client-side as well on server-side!
     * Environment-Variables on npm start will get ignored!
     */
    thumborUrl: process.env.THUMBOR_URL || 'https://images.hotel-edison.de',
    thumborAssetsUrl: process.env.THUMBOR_ASSETS_URL,
    apiUrl: process.env.API_URL || 'https://api.hotel-edison.de'
  },
  head: {
    title: 'hotel-edison',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website for Hotel Edison GmbH' }
    ]
  },
  sitemap: {
    routes: [
      '/zimmer-und-preise/doppelzimmer-classic',
      '/zimmer-und-preise/doppelzimmer-classic-plus',
      '/zimmer-und-preise/doppelzimmer-comfort',
      '/zimmer-und-preise/doppelzimmer-comfort-plus',
      '/zimmer-und-preise/junior-appartement',
      '/zimmer-und-preise/senior-appartement',
      '/zimmer-und-preise/panorama-suite'
    ]
  },
  loading: { color: '#F2C34A' },
  build: {
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      };
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
    vendor: [
      'babel-polyfill'
    ],
    babel: {
      presets: [
        [
          'vue-app',
          {
            useBuiltIns: true,
            targets: { ie: 11, uglify: true }
          }
        ]
      ]
    }
  },
  css: [
    '~/assets/style/global.scss'
  ],
  router: {
    middleware: [
      'localeMiddleware',
      'defaultStoreMiddleware'
    ]
  },
  serverMiddleware: [
    '~/middleware/loggingMiddleware'
  ],
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/fontawesome.js',
    { src: '~/plugins/vueAgile.js', ssr: false },
    { src: '~/plugins/googleAnalytics.js', ssr: false },
    { src: '~/plugins/aos.js', ssr: false },
    { src: '~/plugins/vueCarousel.js', ssr: false }
  ],
  modules: [
    'nuxt-rfg-icon',
    '@nuxtjs/manifest',
    '@nuxtjs/sitemap'
  ]
};
