import { defineClientConfig } from '@vuepress/client'
import Footer from './components/Footer.vue'
import MyLive from './components/MyLive.vue'
import MyAudio from './components/MyAudio.vue'
import LiveArchive from './components/LiveArchive.vue'
import Button from './components/Button.vue'
import ButtonBuyCoffee from './components/ButtonBuyCoffee.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyLive', MyLive),
    app.component('MyAudio', MyAudio),
    app.component('LiveArchive', LiveArchive)
    app.component('Button', Button)
    app.component('ButtonBuyCoffee', ButtonBuyCoffee)
  },
  setup() {},
  rootComponents: [Footer],
})