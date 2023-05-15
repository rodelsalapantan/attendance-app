import Welcome from '@/views/Welcome.vue'
import Login from '@/views/Auth/Login.vue'
import Home from '@/views/Default/Home.vue'

const routes = [
    { path: '/', name: 'welcome', component: Welcome },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Welcome },

    { path: '/home', name: 'home', component: Home },
]

export default routes;