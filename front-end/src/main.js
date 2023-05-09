import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import App from '@/App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const pinia = createPinia()

pinia.use(({store}) => {
    store.router = markRaw(router)
})

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
