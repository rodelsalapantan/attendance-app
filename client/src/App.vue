<template>
  <LoadingScreen v-if="loading" />
  <template v-else>
    <NavBar />
    <main>
      <router-view></router-view>
    </main>
  </template>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import LoadingScreen from './components/LoadingScreen.vue';
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})

</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>