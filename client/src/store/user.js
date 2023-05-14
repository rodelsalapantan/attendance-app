import { defineStore } from 'pinia'
import { axiosFetch } from '@/composables/AxiosFetch'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: null,
        loading: false,
        error: [],
    }),
    getters: {
        isAuth(state) {
            return state.user !== null
        }
    },
    actions: {
        async getToken(){
            const { data, error } = await axiosFetch('sanctum/csrf-cookie');
            console.log(data)
            console.log(error)
        }, 
        async handleLogin(){
            this.getToken()
        }
        
    }
})