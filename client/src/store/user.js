import { defineStore } from 'pinia'
import { axiosFetch } from '@/composables/AxiosFetch.js'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: null,
        loading: false,
        status: '',
        error: [],
    }),
    getters: {
        isAuth(state) {
            const auth = localStorage.getItem('is_auth');
            if (!auth) {
                this.setUserToLocalStorage()
            }
            return state.user !== null
        },
    },
    actions: {
        // get token
        async getToken() {
            const { data } = await axiosFetch({ url: 'sanctum/csrf-cookie' });
            if (data.value.status !== 204) {
                console.log('Unauthorized')
            }
        },
        // get user
        async getUser() {
            this.loading = true;
            this.getToken()
            const { data, error } = await axiosFetch({ url: 'user'})
            this.user = data.data;
            this.error = error;
            this.loading = false;
        },
        // set true to localstorage if user exist
        async setUserToLocalStorage() {
            this.getUser()
            localStorage.setItem("is_auth", this.user === null)
        },
        // reset errors and status
        async resetErrorsAndStatus(){
            this.error = []
            this.status = ''
        },
        // handle login submit
        async handleLogin(payload) {
            this.resetErrorsAndStatus()
            this.loading = true;
            this.getToken()

            const { data, error } = await axiosFetch({
                url: 'login',
                payload: {
                    email: payload.email, 
                    password: payload.password 
                },
                method: 'POST',
            });

            this.user = data.value;
            this.error = error.value.response.data.errors;
            this.loading = false;
        },

    },
})