<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import IndeterminateLoader from '@/components/indeterminate-loader/IndeterminateLoader.vue';
import SearchBox from '@/components/top-app-bar/search-box/SearchBox.vue';
import ThemeMenu from '@/components/menus/ThemeMenu.vue';
import LocaleMenu from '@/components/menus/LocaleMenu.vue';
import Interact from '@/components/interact/Interact.vue';

import { useGlobalStore } from '@/stores/global';
import { useScrollStore } from '@/stores/scroll';
// import { useSnack } from '@/composables/snack';

import { useDisplay, useLocale } from 'vuetify/lib/framework.mjs';

const globalStore = useGlobalStore();
const scrollStore = useScrollStore();

const route = useRoute();
const locale = useLocale();
// const snack = useSnack();
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
        class="bg-color-transition">
        <VHover v-slot="{ isHovering, props }">
            <Interact
                v-slot="{ isInteracted }"
                class="ms-1">
                <VAppBarNavIcon
                    v-if="!rootDestonation && !display.lgAndUp.value"
                    :rounded="isInteracted ? 'md' : 'full'"
                    class="border-radius-transition"
                    :class="[isHovering ? 'md-sym-to-600' : 'md-sym-to-400']"
                    @click="goBack()"
                    icon="arrow_back"
                    color="on-surface"
                    v-bind="props" />
            </Interact>
        </VHover>

        <VHover v-slot="{ isHovering, props }">
            <Interact
                v-slot="{ isInteracted }"
                class="ms-1">
                <VAppBarNavIcon
                    v-if="!display.xs.value && !display.lgAndUp.value && rootDestonation"
                    @click="globalStore.rail = true"
                    :rounded="isInteracted ? 'md' : 'full'"
                    class="border-radius-transition"
                    :class="[isHovering ? 'md-sym-to-600' : 'md-sym-to-400']"
                    icon="menu"
                    color="on-surface"
                    v-bind="props" />
            </Interact>
        </VHover>

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
                        snack.snack({
                            message: 'This site is still in beta. Report about bugs on GitHub.',
                            action: {
                                title: 'OK',
                                action: () => {
                                    snack.dismiss();
                                }
                            }
                        });
                    }
                "
                prepend-icon="pest_control"
                variant="flat"
                color="state-error"
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
