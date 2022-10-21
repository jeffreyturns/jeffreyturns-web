<script setup lang="ts">
import { watch } from 'vue';

import '@/styles/main.scss';

import { useRoute } from 'vue-router';
import { useAppTitle } from '@/composables/useAppTitle';
import { useSnack } from '@/composables/useSnack';

import { useGlobalStore } from '@/stores/global';

import { Layout } from '@/router/routes';

import Scaffold from '@/components/scaffold/Scaffold.vue';

import NotFound from '@/pages/not-found/NotFound.vue';
import Error from '@/pages/error/Error.vue';
import UnderBuilding from '@/pages/error/UnderConstruction.vue';

import SnackBar from '@/components/snack-bar/SnackBar.vue';
import NavigationRail from '@/components/scaffold/navigation-rail/NavigationRail.vue';
import NavigationBar from '@/components/scaffold/navigation-bar/NavigationBar.vue';
import TopAppBar from '@/components/top-app-bar/TopAppBar.vue';
import ScrollContainer from '@/components/scroll-container/ScrollContainer.vue';
import PageTransition from '@/components/scaffold/page-transition/PageTransition.vue';
import FAB from '@/components/scaffold/fab/FAB.vue';
import Footer from '@/components/scaffold/footer/Footer.vue';
import ThemeProvider from '@/composables/provider/theme-provider/ThemeProvider.vue';
import LocaleProvider from '@/composables/provider/locale-provider/LocaleProvider.vue';
import { useLocale } from 'vuetify/lib/framework.mjs';

const inRouteRecord = (record: string, tragetRoutesName: readonly string[]) => {
    return tragetRoutesName.includes(record || '');
};

const route = useRoute();
const snack = useSnack();
const locale = useLocale();
const globalStore = useGlobalStore();

const showSearchAtRoutes = ['search'];
const pageUnderConstruction = ['privacy policy', 'collections'];

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
        useAppTitle(locale.t(`$vuetify.pages.${route.meta?.title}.documentTitle`));

        globalStore.isNotFoundPage = inRouteRecord(value?.meta?.layout?.toString() ?? '', [Layout.NONE]);

        globalStore.showSearch = inRouteRecord(value.name?.toString() || '', showSearchAtRoutes);

        globalStore.pageState.isUnderBuilding = inRouteRecord(value.name?.toString() || '', pageUnderConstruction);

        globalStore.resetStates();

        scrollToTop();
    },
    { immediate: true, deep: true }
);

// onMounted(() => {
//     snack.snack({
//         message: '$vuetify.cookie.message',
//         duration: false,
//         action: {
//             title: '$vuetify.cookie.action',
//             action: () => {
//                 console.log('test');
//             }
//         }
//     });
// });
</script>

<template>
    <ThemeProvider>
        <LocaleProvider>
            <VApp>
                <Scaffold>
                    // top actions
                    <template #top>
                        <TopAppBar />
                    </template>
                    // rail or drawer
                    <template #rail>
                        <NavigationRail :isLabeled="true" />
                    </template>
                    // content or router
                    <template #content>
                        <VMain>
                            <ScrollContainer :isFluid="true">
                                <RouterView v-slot="{ Component }">
                                    <PageTransition
                                        :useRouterDefinedTransition="true"
                                        :componentNode="Component" />
                                </RouterView>
                            </ScrollContainer>
                            <Footer />
                        </VMain>
                    </template>
                    // bottom bar or bar with fab
                    <template #bar>
                        <NavigationBar />
                    </template>
                    // additional action
                    <template #fab>
                        <FAB />
                    </template>
                </Scaffold>
                <NotFound />
                <Error />
                <UnderBuilding />
                <SnackBar />
            </VApp>
        </LocaleProvider>
    </ThemeProvider>
</template>
