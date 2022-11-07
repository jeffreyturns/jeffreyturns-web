<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import IndeterminateLoader from '@/components/indeterminate-loader/IndeterminateLoader.vue';
import SearchBox from '@/components/top-app-bar/search-box/SearchBox.vue';
import ThemeMenu from '@/components/menus/ThemeMenu.vue';
import LocaleMenu from '@/components/menus/LocaleMenu.vue';

import { useGlobalStore } from '@/stores/global';
import { useScrollStore } from '@/stores/scroll';

import * as baseStyles from '@/styles/styles.css';
import { useDisplay, useLocale } from 'vuetify/lib/framework.mjs';

const globalStore = useGlobalStore();
const scrollStore = useScrollStore();

const route = useRoute();
const locale = useLocale();
const router = useRouter();
const display = useDisplay();

function elevationColor(reversed = false) {
    return reversed ? (scrollStore.getIsScolled() ? 'surface' : 'surface-4') : scrollStore.getIsScolled() ? 'surface-4' : 'surface';
}

const rootDestonation = computed((): boolean => route.meta?.isRoot as boolean);

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
            v-if="!rootDestonation && !display.lgAndUp.value"
            @click="goBack()"
            icon="arrow_back"
            color="on-surface" />

        <VAppBarNavIcon
            v-if="!display.xs.value && !display.lgAndUp.value && rootDestonation"
            @click="globalStore.rail = true"
            icon="menu"
            color="on-surface" />

        <VToolbarTitle
            class="font-weight-medium"
            v-if="!globalStore.showSearch"
            v-text="locale.t(`$vuetify.pages.${route.meta?.title}.documentTitle`) ?? 'Not Found'" />

        <IndeterminateLoader
            :isRounded="true"
            indicatorColor="primary" />

        <SearchBox />

        <VSpacer v-if="!display.xs.value" />

        <div
            v-if="!display.xs.value"
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

            <ThemeMenu />
            <LocaleMenu />
        </div>

        <div
            v-if="display.xs.value && !globalStore.showSearch"
            class="mx-2">
            <ThemeMenu />
            <LocaleMenu />
        </div>
    </VAppBar>
</template>

<style>
.v-field--variant-solo {
    box-shadow: none !important;
}
</style>
