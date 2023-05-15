<template>
    <AuthLayout>
        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="@/assets/img/attendance-svgrepo-com.svg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
                        height="500" loading="lazy">
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Employees Attendance App</h1>
                    <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
                        most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
                        system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <router-link :to="{name: 'register'}" class="btn btn-primary btn-lg px-4 me-md-2">Create Account</router-link>
                        <router-link :to="{name: 'login'}" class="btn btn-outline-secondary btn-lg px-4">Login</router-link>
                    </div>
                </div>
            </div>
        </div>
    </AuthLayout>
</template>
<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue';
</script>