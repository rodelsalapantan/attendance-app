<template>
    <AuthLayout>
        <div class="container mt-5">
            <form @submit.prevent="handleRegister" class="mx-auto border py-4 px-5">
                <h1 class="text-center mb-3 fw-bold mb-5">Register Account</h1>
                <div class="form-floating mb-3">
                    <input v-model="form.name" type="text" class="form-control"
                        :class="{ 'is-invalid': authStore.error?.name }" id="floatingNameInput" placeholder="Enter Name">
                    <label for="floatingEmailInput">Full Name</label>

                    <small v-if="authStore.error?.name" id="helpId" class="text-danger">{{ authStore.error.name[0]
                    }}</small>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="form.email" type="email" class="form-control"
                        :class="{ 'is-invalid': authStore.error?.email }" id="floatingEmailInput"
                        placeholder="name@example.com">
                    <label for="floatingEmailInput">Email address</label>

                    <small v-if="authStore.error?.email" id="helpId" class="text-danger">{{ authStore.error.email[0]
                    }}</small>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="form.password" type="password" class="form-control"
                        :class="{ 'is-invalid': authStore.error?.password }" id="floatingPasswordInput"
                        placeholder="Enter Password">
                    <label for="floatingPasswordInput">Password</label>
                    <small v-if="authStore.error?.password" id="helpId" class="text-danger">{{ authStore.error.password[0]
                    }}</small>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="form.password_confirmation" type="password" class="form-control"
                        :class="{ 'is-invalid': authStore.error?.password_confirmation }" id="floatingPasswordConfirmInput"
                        placeholder="Enter Password">
                    <label for="floatingPasswordConfirmInput">Confirm Password</label>
                    <small v-if="authStore.error?.password_confirmation" id="helpId" class="text-danger">{{
                        authStore.error.password_confirmation[0] }}</small>
                </div>

                <div class="text-center mb-3">
                    <button type="submit" class="btn btn-primary w-100">Create Account</button>
                </div>
                <hr />
                <div class="text-center">
                    Already user? <router-link :to="{ name: 'login' }" class="text-decoration-none">Login</router-link>
                </div>
            </form>
        </div>
    </AuthLayout>
</template>
<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue';
import { useAuthStore } from '@/store/user.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const authStore = useAuthStore()
const router = useRouter()

const form = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

const handleRegister = async () => {
    const swal = Swal.fire({
    title: 'Creating account...',
    didOpen: () => {
      Swal.showLoading()
    }
  });
    try {
        authStore.error = null;
        await authStore.getTokens();
        await authStore.register(form.value);
        await authStore.getUser()
        router.push({ name: 'home' })

    } catch (error) {
        console.log(error)
        authStore.error = error.response.data.errors
    } finally {
        swal.close()
    }
}
onMounted(() => {
    if (authStore.error) {
        authStore.error = null
    }
})

</script>
  
<style scoped>
form {
    max-width: 500px;
}
</style>