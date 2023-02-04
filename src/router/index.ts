import { createRouter, createWebHistory } from 'vue-router';

import routes from '@/router/routes';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
});

export default router;
