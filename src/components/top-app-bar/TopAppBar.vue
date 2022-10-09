<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

import IndeterminateLoader from '@/components/indeterminate-loader/IndeterminateLoader.vue';
import SearchBox from '@/components/top-app-bar/search-box/SearchBox.vue';
import ThemeMenu from '@/components/menus/ThemeMenu.vue';

import { useGlobalStore } from '@/stores/global';
import { useScrollStore } from '@/stores/scroll';

import * as baseStyles from '@/styles/styles.css';

const globalStore = useGlobalStore();
const scrollStore = useScrollStore();

const route = useRoute();
const router = useRouter();

function elevationColor(reversed = false) {
    return reversed ? (scrollStore.getIsScolled() ? 'surface' : 'surface-4') : scrollStore.getIsScolled() ? 'surface-4' : 'surface';
}

function rootDestonation(): boolean {
    return route.meta?.isRoot as boolean;
}

function goBack(): void {
    route.meta?.isRoot ? null : window.history.length > 2 ? router.go(-1) : router.push('/');
}
</script>

<template>
    <VAppBar
        app
        :color="elevationColor()"
        :style="baseStyles.bgColorTransition">
        <VAppBarNavIcon
            v-if="!rootDestonation() && !$vuetify.display.lgAndUp"
            @click="goBack()"
            icon="arrow_back"
            color="on-surface" />

        <VAppBarNavIcon
            v-if="!$vuetify.display.xs && !$vuetify.display.lgAndUp && rootDestonation()"
            @click="globalStore.rail = true"
            icon="menu"
            color="on-surface" />

        <VToolbarTitle
            class="font-weight-medium"
            v-if="!globalStore.showSearch"
            v-text="$route.meta?.title ?? 'Not Found'" />

        <IndeterminateLoader
            :isRounded="true"
            indicatorColor="primary" />

        <SearchBox />

        <VSpacer v-if="!$vuetify.display.xs" />

        <div
            v-if="!$vuetify.display.xs"
            class="mx-2">
            <!-- <VBtn
                @click="
                    () => {
                        snack({
                            message: 'This site is still in beta. Report about bugs on GitHub.',
                            action: {
                                title: 'OK',
                                action: () => {
                                    snackStore.dismiss();
                                }
                            }
                        });
                    }
                "
                prepend-icon="pest_control"
                variant="flat"
                color="state-info"
                class="mx-1">
                Beta
            </VBtn> -->

            <VBtn
                prepend-icon="fork_right"
                variant="outlined"
                class="mx-1">
                Fork
            </VBtn>

            <ThemeMenu />
        </div>

        <div
            v-if="$vuetify.display.xs && !globalStore.showSearch"
            class="mx-2">
            <VBtn
                prepend-icon="fork_right"
                variant="outlined"
                class="mx-1">
                Fork
            </VBtn>
            <ThemeMenu />
        </div>
    </VAppBar>
</template>

<style>
.v-field--variant-solo {
    box-shadow: none !important;
}
</style>
