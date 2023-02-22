import { defineClientConfig } from '@vuepress/client'
import MyLive from './components/MyLive.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyLive', MyLive)
  },
  setup() {},
  rootComponents: [],
})