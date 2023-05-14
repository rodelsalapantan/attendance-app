<template lang="">
    <div class="container mt-5">
      <form @submit.prevent="authStore.handleLogin">
        <div class="mb-3">
          <label for="" class="form-label">Name</label>
          <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
          <small id="helpId" class="text-muted">Help text</small>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Name</label>
          <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
          <small id="helpId" class="text-muted">Help text</small>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
</template>
<script setup>
import useAuthStore from '@/store/user.js'

const authStore = useAuthStore()

</script>

<style scoped>
  form {
    max-width: 500px;
  }
</style>