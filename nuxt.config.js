export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'E3 | Energía Eficiente y Automatización',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        property: 'og:description',
        content:
          'Proveemos soluciones eficientes en el manejo y conversión de energía así como de impacto en beneficio del medio ambiente a los sectores de la Industria y Construcción.',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'E3 | Energía Eficiente y Automatización',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        property: 'og:site_name',
        content: 'E3',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        itemprop: 'image',
        content: '/thumbnail.jpg',
      },
      {
        name: 'facebook-domain-verification',
        content: 'gzfug1ty6keaim9cyv7grg9oyhu3f7',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { hid: 'shortcut-icon', rel: 'shortcut icon', href: '/favicon.png' },
      {
        hid: 'apple-touch-icon',
        rel: 'apple-touch-icon',
        href: '/thumbnail.jpg',
      },
    ],
    script: [
      {
        hid: 'mailchimp',
        id: 'mcjs',
        src: '/mailchimp.js',
        defer: true,
      },
    ],
  },

  loading: {
    color: '#94b743',
    height: '3px',
    failedColor: '#d11548',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/type.css', '~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-awesome-swiper.js', '~/plugins/vuelidate.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/prismic',
  ],

  prismic: {
    endpoint: 'https://e3mx.cdn.prismic.io/api/v2',
    modern: true,
    apiOptions: {
      routes: [
        {
          type: 'homepage',
          path: '/:lang?',
        },
        {
          type: 'blog_post',
          path: '/:lang?/blog/:uid',
        },
        {
          type: 'blog_feed',
          path: '/:lang?/blog',
        },
        {
          type: 'policy_page',
          path: '/:lang?/legal/:uid',
        },
      ],
    },
    linkResolver(doc) {
      if (doc.type === 'homepage') {
        return `/${doc.lang}`
      }

      if (doc.type === 'blog_feed') {
        return `/${doc.lang}/blog/`
      }

      if (doc.type === 'blog_post') {
        return `/${doc.lang}/blog/${doc.uid}`
      }

      if (doc.type === 'policy_page') {
        return `/${doc.lang}/legal/${doc.uid}`
      }

      return '/not-found'
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    '@nuxtjs/gtm',
  ],

  gtm: {
    id: 'GTM-PFKL2H8',
    enabled: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: 'en',
  //   },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
