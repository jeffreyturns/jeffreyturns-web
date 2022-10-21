import { RouteRecordRaw } from 'vue-router';

import HomeView from '@/pages/home/Home.vue';

export enum Layout {
    NONE = 'none',
    COMMON = 'common'
}

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        meta: {
            layout: Layout.NONE,
            title: 'notFound',
            isRoot: false
        },
        component: () => import('@/components/empty/Empty.vue')
    },
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'home',
            isRoot: true
        },
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: 'about',
            isRoot: true
            // transition: 'scroll-x-transition'
        },
        component: () => import('@/pages/about/About.vue')
    },
    {
        path: '/search',
        name: 'search',
        meta: {
            title: 'search',
            isRoot: true
        },
        component: () => import('@/pages/search/Search.vue')
    },
    {
        path: '/privacy-policy',
        name: 'privacy policy',
        meta: {
            title: 'privacyPolicy',
            isRoot: true
        },
        component: () => import('@/pages/privacy-policy/PrivacyPolicy.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        meta: {
            title: 'projects',
            isRoot: true
        },
        component: () => import('@/pages/project/Projects.vue')
    },
    {
        path: '/project/:name',
        name: 'project',
        meta: {
            title: 'project',
            isRoot: false
        },
        component: () => import('@/pages/project/Project.vue')
    },
    {
        path: '/collections/:name',
        name: 'collections',
        meta: {
            title: 'collections',
            isRoot: false
        },
        component: () => import('@/pages/collections/Collections.vue')
    }
];

export default routes;
