<script setup lang="ts">
import { onMounted, watch } from 'vue';

import '@/styles/main.scss';

import { useRoute } from 'vue-router';
import { useAppTitle } from '@/composables/useAppTitle';
import { useSnack } from '@/composables/useSnack';

import { useGlobalStore } from '@/stores/global';

import Scaffold from '@/components/scaffold/Scaffold.vue';

import NotFound from '@/pages/not-found/NotFound.vue';
import Error from '@/pages/error/Error.vue';

import SnackBar from '@/components/snack-bar/SnackBar.vue';
import NavigationRail from '@/components/scaffold/navigation-rail/NavigationRail.vue';
import NavigationBar from '@/components/scaffold/navigation-bar/NavigationBar.vue';
import TopAppBar from '@/components/top-app-bar/TopAppBar.vue';
import ScrollContainer from '@/components/scroll-container/ScrollContainer.vue';
import PageTransition from '@/components/scaffold/page-transition/PageTransition.vue';
import FAB from '@/components/scaffold/fab/FAB.vue';
import Footer from '@/components/scaffold/footer/Footer.vue';
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue';

const inRouteRecord = (record: string, tragetRoutesName: readonly string[]) => {
    return tragetRoutesName.includes(record || '');
};

const route = useRoute();
const snack = useSnack();
const globalStore = useGlobalStore();

const showSearchAtRoutes = ['search'];

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};

watch(
    () => route,
    value => {
        useAppTitle(`${value.meta?.title}`);

        globalStore.isNotFoundPage = inRouteRecord(value?.meta?.layout?.toString() ?? '', ['none']);

        globalStore.showSearch = inRouteRecord(value.name?.toString() || '', showSearchAtRoutes);

        globalStore.resetStates();

        scrollToTop();
    },
    { immediate: true, deep: true }
);

watch(
    () => globalStore.pageState.isError,
    () => {
        if (globalStore.pageState.isError) {
            snack.snack({
                message: 'Something went wrong while loading.',
                duration: false,
                action: {
                    title: 'OK',
                    action: () => {
                        console.log('test');
                    }
                }
            });
        }
    },
    { deep: true }
);

onMounted(() => {
    snack.snack({
        message: 'I serve cookies on this site to analyze traffic, remember your preferences, and optimize your experience.',
        duration: false,
        action: {
            title: 'Got it',
            action: () => {
                console.log('test');
            }
        }
    });
});
</script>

<template>
    <ThemeProvider>
        <VApp>
            <Scaffold>
                // top actions
                <template v-slot:top>
                    <TopAppBar />
                </template>
                // rail or drawer
                <template v-slot:rail>
                    <NavigationRail :isLabeled="true" />
                </template>
                // content or router
                <template v-slot:content>
                    <VMain>
                        <ScrollContainer :isFluid="true">
                            <RouterView v-slot="{ Component }">
                                <PageTransition
                                    :useRouterDefinedTransition="true"
                                    :componentSlot="Component" />
                            </RouterView>
                        </ScrollContainer>
                        <Footer />
                    </VMain>
                </template>
                // bottom bar or bar with fab
                <template v-slot:bar>
                    <NavigationBar />
                </template>
                // additional action
                <template v-slot:fab>
                    <FAB />
                </template>
            </Scaffold>
            <NotFound />
            <Error />
            <SnackBar />
        </VApp>
    </ThemeProvider>
</template>
