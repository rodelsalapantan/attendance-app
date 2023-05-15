import Welcome from '@/views/Welcome.vue'
import Login from '@/views/Auth/Login.vue'
import Register from '@/views/Auth/Register.vue'
import Home from '@/views/Default/Home.vue'

const routes = [
    { path: '/', name: 'welcome', component: Welcome, meta: { requireAuth: false } },
    { path: '/login', name: 'login', component: Login, meta: { requireAuth: false }  },
    { path: '/register', name: 'register', component: Register, meta: { requireAuth: false }  },

    { path: '/home', name: 'home', component: Home, meta: { requireAuth: true }  },

]

export default routes;