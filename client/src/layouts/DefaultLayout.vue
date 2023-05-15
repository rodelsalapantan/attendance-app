<template lang="">
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div class="container-fluid">
            <router-link :to="{ path: '/' }" class="nav-link">Attendance App</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <button :to="{ name: 'login' }" class="nav-link btn " @click.prevent="showLogoutDialog">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main >
        <slot />
    </main>
</template>

<script setup>
import { useAuthStore } from '@/store/user.js'
import { useRouter } from 'vue-router';
import { useToast } from '@/composables/ToastSweetAlert.js'

const { ToastWithTimer, AlertDialog, AlertCenterLoading } = useToast();

const authStore = useAuthStore();
const router = useRouter();

const showLogoutDialog = async () => {
    await AlertDialog.fire({
        title: 'Are you sure?',
        text: "Click confirm to continue logout.",
        icon: 'warning'
    }).then( async (result) => {
        if (result.isDismissed) {
            return;
        }
        // continue logout
        AlertCenterLoading.fire({ title: 'Loading, please wait...'})
        await handleLogout();
    })
}

const handleLogout = async () => {
    try {
        await authStore.getTokens();
        await authStore.logout();
        authStore.$reset()

        ToastWithTimer.fire({
            icon: 'success',
            title: 'Logout successful...'
        })
        router.push('/')
    } catch (error) {
        console.log(error)
        alert(`Error while trying to logout..`)
    }
}
</script>

<style scoped>
nav.navbar {
    /* background-color: #ededed; */
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
</style>