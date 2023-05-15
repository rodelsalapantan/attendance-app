<template>
  <AuthLayout>
    <div class="container mt-5">
      <form @submit.prevent="handleLogin" class="mx-auto border py-4 px-5 mt-5">
        <h1 class="text-center mb-3 fw-bold mb-5">Login Account</h1>

        <div class="form-floating mb-3">
          <input v-model="form.email" type="email" class="form-control" :class="{ 'is-invalid': authStore.error?.email }"
            id="floatingEmailInput" placeholder="name@example.com">
          <label for="floatingEmailInput">Email address</label>

          <small v-if="authStore.error?.email" id="helpId" class="text-danger">{{ authStore.error.email[0] }}</small>
        </div>
        <div class="form-floating mb-3">
          <input v-model="form.password" type="password" class="form-control"
            :class="{ 'is-invalid': authStore.error?.password }" id="floatingPasswordInput" placeholder="Enter Password">
          <label for="floatingPasswordInput">Password</label>
          <small v-if="authStore.error?.password" id="helpId" class="text-danger">{{ authStore.error.password[0]
          }}</small>
        </div>

        <div class="text-center mb-3">
          <router-link :to="{ path: '/' }" class="text-decoration-none small">Forgot Password?</router-link>
        </div>
        <div class="text-center mb-3">
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </div>
        <hr />
        <div class="text-center">
          New User? <router-link :to="{ name: 'register' }" class="text-decoration-none">Create Account</router-link>
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
import { useToast } from '@/composables/ToastSweetAlert.js'

const authStore = useAuthStore()
const form = ref({ email: '', password: '' });
const router = useRouter()

const { ToastWithTimer, AlertCenterLoading } = useToast();

const handleLogin = async () => {
  const swal = AlertCenterLoading.fire({
    title: 'Logging in, please wait...',
  });

  try {
    authStore.error = null;
    await authStore.getTokens();
    await authStore.login(form.value);
    await authStore.getUser()

    swal.close();
    ToastWithTimer.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })


    router.push({ name: 'home' })
  } catch (error) {
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