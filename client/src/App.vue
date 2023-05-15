<template>
  <LoadingScreen v-if="loading" />
  <template v-else>
    <router-view></router-view>
  </template>
</template>

<script setup>
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