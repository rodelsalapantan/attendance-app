import { defineStore } from 'pinia'
import axios from '@/plugins/axios.js'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: null,
        loading: false,
        status: null,
        error: null,
        status: null,
    }),
    getters: {
        isLogin(state){
            return state.user !== null
        },
    },
    actions: {
        // get token
        async getTokens() {
            await axios.get('/sanctum/csrf-cookie');
        },
        // get user
        async getUser() {
            const response = await axios.get('/user');
            this.user = response.data.data
        },
        // handle login submit
        async login(payload) {
            await axios.post('/login', { 
                email: payload.email, 
                password: payload.password 
            });
        },
        async logout(){
            await axios.post('/logout');
        },
        async register(payload){
            await axios.post('/register', {
                email: payload.email, 
                name: payload.name,
                password: payload.password,
                password_confirmation: payload.password_confirmation,
            });
        },
    },
    persist: true,
})