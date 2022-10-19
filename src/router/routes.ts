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
            title: 'Not Found',
            isRoot: false
        },
        component: () => import('@/components/empty/Empty.vue')
    },
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Home',
            isRoot: true
        },
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: 'About',
            isRoot: true
            // transition: 'scroll-x-transition'
        },
        component: () => import('@/pages/about/About.vue')
    },
    {
        path: '/test',
        name: 'test',
        meta: {
            title: 'Test',
            isRoot: true
        },
        component: () => import('@/pages/test/Test.vue')
    },
    {
        path: '/search',
        name: 'search',
        meta: {
            title: 'Search',
            isRoot: true
        },
        component: () => import('@/pages/search/Search.vue')
    },
    {
        path: '/policy',
        name: 'policy',
        meta: {
            title: 'Privacy Policy',
            isRoot: true
        },
        component: () => import('@/pages/policy/Policy.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        meta: {
            title: 'Projects',
            isRoot: true
        },
        component: () => import('@/pages/project/Projects.vue')
    },
    {
        path: '/project/:name',
        name: 'project',
        meta: {
            title: 'Project',
            isRoot: false
        },
        component: () => import('@/pages/project/Project.vue')
    },
    {
        path: '/collections/:name',
        name: 'collections',
        meta: {
            title: 'Collections',
            isRoot: false
        },
        component: () => import('@/pages/collections/Collections.vue')
    }
];

export default routes;
