import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@views/home/HomeView.vue'),
    },
    // Not Found Route
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@views/errors/NotFoundView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;