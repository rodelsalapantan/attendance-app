import Welcome from '@/views/Welcome.vue'
import Login from '@/views/Auth/Login.vue'

const routes = [
    { path: '/', name: 'Welcome', component: Welcome },
    { path: '/login', name: 'Loging', component: Login },
]

export default routes;