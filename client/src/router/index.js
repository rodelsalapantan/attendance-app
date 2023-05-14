import routes from "@/routes";

import { createRoute, createWebHistory } from 'vue-router'

const router = createRoute({
    history: createWebHistory(),
    routes,
})


export default router;