
module.exports = {
  mode: 'universal',
  buildDir: 'nuxt-dist',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap", rel: "stylesheet"},
      {
        href:"https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap", rel: "stylesheet"
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;700&display=swap", rel: "stylesheet"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['vue-slick-carousel/dist/vue-slick-carousel.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: './plugins/vue-slick-carousel.js' },
  { src: './plugins/date.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/strapi'
  ],
  strapi: {
    url: 'https://api.rouxnicolas.fr/',
    entities: ['evenements']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
