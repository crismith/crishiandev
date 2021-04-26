export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cristhian Smith Portfolio Freelance - 2021',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'google-site-verification' ,name: 'google-site-verification', content: 'ipY0GJoxYut1xGdZ5_ko4DKevo-Xz21HL-Z2KOtJb1Q' },
      { hid: 'author' ,name: 'author', content: 'Cristhian Smith Zeña Mas' },
      { hid: 'description' ,name: 'description', content: 'Portafolio - CV, Cristhian Smith Zeña Mas, curriculum, Portfolio personal de Cristian Smith Zeña Mas| Programador web Front End en Peru., Frontend' },
      { hid: 'keywords' ,name: 'keywords', content: '"Developer, programador, Developer web, web, pagina web , Cristhian Smith,Cristian desarrollo Web, Front-end development, Frontend,Backend Peru, Responsive, Diseño responsive, UX, UI, webs, Front end, portafolio web, portfolio, freelance, HTML5, CSS3, XHTML ,CSS,JS, W3C standards, jQuery, Javascript' },
      { hid: 'twitter:title' ,name: 'twitter:title', content: 'Cristhian Smith - Portafolio' },
      { hid: 'twitter:description' ,name: 'twitter:description', content: 'Portfolio - Cristian Zeña. Programador web, programador Frontend - Lima - Peru.' },
      { hid: 'og:title' ,name: 'og:title', content: 'Cristhian Smith - Portafolio - Freelance' },
      { hid: 'og:type' ,name: 'og:type', content: 'Portafolio Web Cristhian Smith' },
      { hid: 'og:url' ,name: 'og:url', content: 'https://crismith.github.io/dev/' },
      { hid: 'og:description' ,name: 'og:description', content: 'Portfolio personal de Cristian Zeña, Programador web en Peru.' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
