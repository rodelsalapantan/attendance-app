<template lang="">
    <div class="container mt-5">
      <form @submit.prevent="authStore.handleLogin" class="mx-auto border rounded-2 p-5 shadow">
        <h1 class="text-center mb-3">LOGIN</h1>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input 
            v-model="form.email"
            type="text" id="email" class="form-control" placeholder="" aria-describedby="helpId">
          <!-- <small id="helpId" class="text-muted">Help text</small> -->
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Name</label>
          <input
            v-model="form.password"
            type="password" id="password" class="form-control" placeholder="" aria-describedby="helpId">
          <!-- <small id="helpId" class="text-muted">Help text</small> -->
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary px-5 ">Login</button>
        </div>
      </form>
    </div>
</template>
<script setup>
import useAuthStore from '@/store/user.js'
import { ref } from 'vue'

//const authStore = useAuthStore()
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