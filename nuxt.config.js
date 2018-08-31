module.exports = {
  env: {
    contentfulDeliveryToken: process.env.CONTENTFUL_DELIVERY_TOKEN || 'bc2803f81a91e210314097a8286e07ff02bed1bd6467df0e631de6b0be9ff6e7',
    thumborUrl: process.env.THUMBOR_URL || 'https://images.hotel-edison.ttrks.de',
    thumborAssetsUrl: process.env.THUMBOR_ASSETS_URL
  },
  head: {
    title: 'hotel-edison',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website for Hotel Edison GmbH' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
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
  serverMiddleware: [
    '~/middleware/loggingMiddleware'
  ],
  plugins: ['~/plugins/i18n.js']
};
