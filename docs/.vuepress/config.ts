const { description } = require('../../package')
const { path } = require('@vuepress/utils')
import { defaultTheme } from 'vuepress'

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
  /* base: '',*/
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
    ['link', { type: "txt/css", href: "https://vjs.zencdn.net/8.0.4/video-js.css"}],
    ['script', { src: "https://jasper-shrimp.pikapod.net/umami.js", 'data-website-id': "66b06a36-3963-4ac0-8501-e7d66b4e61fa", async: true, defer: true }]
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
  theme: defaultTheme({
    repo: 'https://github.com/magikcypress/personal-root-live-vuepress-next/',
    editLink: true,
    docsDir: 'docs/',
    editLinkText: 'Edit on Github',
    lastUpdated: true,
    sidebar: false
  })
}