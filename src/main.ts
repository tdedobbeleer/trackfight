import './assets/scss/custom-theme.scss'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/scss/global-buttons.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
