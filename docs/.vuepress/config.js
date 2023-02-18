const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v2.vuepress.vuejs.org/guide/configuration.html
   */
  title: 'Personal Root Live',
  /**
   * Ref：https://v2.vuepress.vuejs.org/guide/configuration.html
   */
  description: description,
  /**
   * Ref：https://npmmirror.com/package/vuepress-plugin-ipfs
   */
  base: '',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v2.vuepress.vuejs.org/guide/configuration.html
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "robots", content: "noindex,nofollow"}],
    ['script', { src: "//cdn.jsdelivr.net/npm/hls.js@latest"}],
    ['script', { src: "/js/live.js"}]
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Personal Root Live',
      description: description
    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v2.vuepress.vuejs.org/guide/theme.html
   */
  themeConfig: {
    repo: 'https://github.com/magikcypress/personal-root-live-vuepress-next/',
    editLink: true,
    docsDir: 'docs/',
    editLinkText: 'Edit on Github',
    lastUpdated: true,
    search: true,
    // default value is true. Set it to false to hide next page links on all pages
    nextLinks: true,
    // default value is true. Set it to false to hide prev page links on all pages
    prevLinks: true,
    sidebar: false
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'markdown-it-html5-embed'
  ]
}