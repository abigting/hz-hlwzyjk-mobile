
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {
        type: 'text/javascript',
        src:
          'https://webapi.amap.com/maps?v=1.4.15&key=b67cc7b67fb24dd2125b85c0047b319b'
      },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'vant/lib/index.less',
    '@/styles/common.less'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/vant-ui', ssr: true }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  proxy: {
    '/ohms-yhzx': {
      target: 'http://192.168.22.158:2227',
    }
  },
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.less$/,
        use: [
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                '@red': '#4892FD'
              }
            }
          }
        ]
      })
    }
  },
  loading: '@/components/loading/index.vue'
}
