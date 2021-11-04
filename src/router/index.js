import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/navigation/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home",
        },
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../pages/navigation/About.vue"),
        meta: {
            title: "About",
        },
    },
    {
        path: "/work",
        name: "Work",
        component: () => import("../pages/navigation/Work.vue"),
        meta: {
            title: "Work",
        },
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../pages/navigation/Contact.vue"),
        meta: {
            title: "Contact",
        },
    },
    {
        path: "*",
        name: "404",
        component: () => import("../pages/NotFound.vue"),
        meta: {
            title: "Not Found",
        },
    },
    {
        path: "/project/:project",
        name: "Project",
        component: () => import("../pages/ProjectView.vue"),
        meta: {
            title: "dynamic",
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.afterEach((to) => {
    Vue.nextTick(() => {
        if (to.meta.title != "dynamic" /* when title is dynamic, title should is init in component */) {
            document.title = to.meta.title + " · Jftrns" || "Jftrns";
        }
    });
});

export default router;