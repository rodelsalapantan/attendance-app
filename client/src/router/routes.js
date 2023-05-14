import Welcome from '@/views/Welcome.vue'
import Login from '@/views/Auth/Login.vue'

const routes = [
    { path: '/', name: 'welcome', component: Welcome },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Welcome },
]

export default routes;