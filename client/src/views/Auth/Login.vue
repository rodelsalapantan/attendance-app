<template lang="">
    <div class="container mt-5">
      <form @submit.prevent="authStore.handleLogin(form)" class="mx-auto border rounded-2 py-4 px-5 shadow">
        <h1 class="text-center mb-3 fw-bold">LOGIN</h1>

        <div class="form-floating mb-3">
              <input
                v-model="form.email"
                type="email" 
                class="form-control" 
                :class="{'is-invalid' : authStore.error?.email}"
                id="floatingEmailInput"
                placeholder="name@example.com">
              <label for="floatingEmailInput">Email address</label>

              <small v-if="authStore.error.email" id="helpId" class="text-danger">{{ authStore.error.email[0] }}</small>
        </div>
        <div class="form-floating mb-3">
          <input
                v-model="form.password"
                type="password" 
                class="form-control" 
                :class="{'is-invalid' : authStore.error?.password}"
                id="floatingPasswordInput"
                placeholder="Enter Password">
              <label for="floatingPasswordInput">Password</label>
          <small v-if="authStore.error.password" id="helpId" class="text-danger">{{ authStore.error.password[0] }}</small>
        </div>

        <div class="text-center mb-3">
          <router-link :to="{ path: '/'}" class="text-decoration-none small">Forgot Password?</router-link>
        </div>
        <div class="text-center mb-3">
          <button type="submit" class="btn btn-primary w-100 fw-bold">Login</button>
        </div>
        <hr />
        <div class="text-center">
          <router-link :to="{ path: '/'}" class="btn btn-success" style="background-color: green">Create Account</router-link>
        </div>
      </form>
    </div>
</template>
<script setup>
import { useAuthStore } from '@/store/user.js'
import { ref } from 'vue'


const authStore = useAuthStore()
const form = ref({
  email: '',
  password: ''
});


</script>

<style scoped>
form {
  max-width: 500px;
}
</style>