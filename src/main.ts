import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/stores'
import 'virtual:svg-icons-register'
import '@/styles/main.scss'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
