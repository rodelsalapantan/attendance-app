import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from '@/router'
import App from '@/App.vue'
import '@/plugins/axios'


import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate);
pinia.use(({store}) => {
    store.router = markRaw(router)
})

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
