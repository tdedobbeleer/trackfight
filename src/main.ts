import './assets/scss/custom-theme.scss'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)

AOS.init({
  easing: 'ease-in-out',
  duration: 800,
  once: true,
  offset: 80,
  disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
})

app.mount('#app')
