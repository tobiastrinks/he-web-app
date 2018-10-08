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
    contentfulDeliveryToken: process.env.CONTENTFUL_DELIVERY_TOKEN || 'bc2803f81a91e210314097a8286e07ff02bed1bd6467df0e631de6b0be9ff6e7',
    thumborUrl: process.env.THUMBOR_URL || 'https://images.hotel-edison.ttrks.de',
    thumborAssetsUrl: process.env.THUMBOR_ASSETS_URL,
    apiUrl: process.env.API_URL || 'https://api.hotel-edison.ttrks.de'
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
    '~/plugins/fontawesome.js'
  ],
  modules: [
    'nuxt-rfg-icon',
    '@nuxtjs/manifest',
    '@nuxtjs/sitemap'
  ]
};
