import fs from 'fs'

const environment = process.env.NODE_ENV
const env = require(`./env/${environment}.ts`)
env.publicationLatestFiscalYear = 2019

const menuList = JSON.parse(fs.readFileSync('static/data/menuList.json'))
env.menuList = menuList

const people2 = JSON.parse(fs.readFileSync('static/data/people2.json'))
env.people2 = people2

const publication = JSON.parse(fs.readFileSync('static/data/publication.json'))
env.publication = publication

const organization = JSON.parse(
  fs.readFileSync('static/data/organization.json')
)
env.organization = organization

const latestSyhoVol = 54
env.syoho = []
for (let vol = 1; vol <= latestSyhoVol; vol++) {
  env.syoho[vol] = JSON.parse(
    fs.readFileSync(`static/data/syoho/${('0000' + vol).slice(-4)}/data.json`)
  )
}

// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/dev/',
        },
      }
    : {}

const GOOGLE_ANALYTICS_ID = 'abc'

// path
const baseUrl = env.BASE_URL || ''
const baseDir = env.BASE_DIR || '/'
const basePath = baseUrl + baseDir

// meta
const lang = 'ja'
const siteName =
  '東京大学史料編纂所 | Historiographical Institute The University of Tokyo'
const siteDesc =
  '東京大学史料編纂所は、東京大学の附置研究所で、国内外の史料の調査、収集・複写、分析、編纂、公開を行い、歴史情報学研究を推進することを目的とする研究所である。1793年、徳川幕府の援助を受けた国学者塙保己一が開設した和学講談所を源流とする。 近年では複写に最新の写真技術やデジタル画像技術が駆使されている。'
const siteKeywords =
  '東京大学史料編纂所, Historiographical Institute, 東京大学, The University of Tokyo'

// images
const iconImages = basePath + 'img/icons/'
const ogpImages = basePath + 'img/ogp/'

// pwa
const shortName = 'HI'
const manifestIcon = 'img/icons/icon-512.png'
// const splashscreens = cdnPath + 'img/splashscreens/'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: true,
  // srcDir: 'src/',

  env,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang,
    },
    titleTemplate: `%s - ${siteName}`,
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      // ogp関連
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: basePath },
      { hid: 'og:title', property: 'og:title', content: siteName },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${ogpImages}home.jpg`,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      // pwa iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: iconImages + 'favicon-16.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: iconImages + 'favicon-32.png',
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: iconImages + 'favicon-48.png',
      },
      {
        rel: 'icon',
        sizes: '72x72',
        type: 'image/png',
        href: iconImages + 'favicon-72.png',
      },
      // apple touch icon
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: iconImages + 'apple-touch-icon.png',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500&display=swap',
      },
      /*
      {
        rel: 'stylesheet',
        href: 'https://www.ssl-system.jp/hi-u-tokyo/assets/css/style.css',
      },
      */
      {
        rel: 'stylesheet',
        href: basePath + 'assets/css/style.css',
      },
    ],
  },

  manifest: {
    lang,
    name: siteName,
    short_name: shortName,
    description: siteDesc,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
  },
  icon: {
    iconFileName: manifestIcon,
  },

  loading: { color: '#E64A19', height: '5px' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/utils.ts', '@/plugins/searchUtils.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-analytics',
      {
        id: GOOGLE_ANALYTICS_ID,
      },
    ],

    'nuxt-i18n',
    // Simple usage
    // '@nuxtjs/amp',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en_US', file: 'en.json' },
      { code: 'ja', iso: 'ja_JP', file: 'ja.json' },
      // { code: 'zh', iso: 'zh_CN', file: 'zh.json' },
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'static/data/lang/',
    // strategy: 'no_prefix'
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    routes() {
      let currentYear = new Date().getFullYear()
      const currentMonth = new Date().getMonth() + 1
      currentYear = currentMonth < 4 ? currentYear - 1 : currentYear

      const pages = []

      /*
      pages.push({
        route: `/news/`,
      })
      */

      for (let i = currentYear - 1; i >= 1997; i--) {
        pages.push({
          route: `/news/list/${i}`,
        })
      }

      // ---------

      const fs = require('fs')
      const publication = JSON.parse(
        fs.readFileSync('static/data/publication.json')
      )

      for (const year in publication) {
        pages.push({
          route: `/publication/list/${year}`,
          payload: {
            items: publication[year],
          },
        })
      }

      /*
      pages.push({
        route: `/publication/`,
        payload: {
          items: publication[env.publicationLatestFiscalYear],
        },
      })
      */

      return pages
    },
  },

  ...routerBase,
}
