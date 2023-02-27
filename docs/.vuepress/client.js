import { defineClientConfig } from '@vuepress/client'
import MyLive from './components/MyLive.vue'
import MyAudio from './components/MyAudio.vue'
import LiveArchive from './components/LiveArchive.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyLive', MyLive),
    app.component('MyAudio', MyAudio),
    app.component('LiveArchive', LiveArchive)
  },
  setup() {},
  rootComponents: [],
})