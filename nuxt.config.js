const strapiBaseUri = process.env.API_URL || 'https://admin.lamaisonblanche-dune.fr/'

module.exports = {
  mode: 'universal',
  buildDir: 'nuxt-dist',
  env: {
    strapiBaseUri,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Restaurant Pyla-sur-mer | La Maison Blanche',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Le restaurant la Maison Blanche vous invite à voyager au coeur d’une cuisine inspirée de la trattoria traditionnelle. Nous présentons une cuisine authentique, généreuse et dans le respect des arrivages de saison.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap',
        rel: 'stylesheet'
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;700&display=swap',
        rel: 'stylesheet'
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
  css: ['vue-slick-carousel/dist/vue-slick-carousel.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: './plugins/vue-slick-carousel.js' },
    { src: './plugins/date.js' },
    { src: '~plugins/v-calendar.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/strapi'
  ],
  strapi: {
    url: strapiBaseUri,
    entities: ['evenement'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
