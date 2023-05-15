import routes from "@/router/routes.js";
import { useAuthStore } from "@/store/user";

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    console.log(to.fullPath)

    // Accessing Private Routes but not logged in
    if (to.meta.requireAuth && !authStore.isLogin) {
        next('/login')
        return
    }
    // Accessing Public Routes but logged in
    if (!to.meta.requireAuth && authStore.isLogin) {
        next('/home')
        return
    }
    next();
})

export default router;