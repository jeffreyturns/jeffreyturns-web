<script setup lang="ts">
import { RouteLocationRaw, useRoute, useRouter } from 'vue-router';
import { useDisplay, useLocale } from 'vuetify/lib/framework.mjs';

import RailLogo from '@/components/scaffold/navigation-rail/rail-logo/RailLogo.vue';

import { NAVIGATION_ITEMS } from '@/stores/global';

import * as styles from './navigation-rail.css';
import * as baseStyles from '@/styles/styles.css';

import { useGlobalStore } from '@/stores/global';

const route = useRoute();
const router = useRouter();
const display = useDisplay();
const { t } = useLocale();

const globalStore = useGlobalStore();

interface NavigationRailProps {
    isLabeled: boolean;
}

const props = withDefaults(defineProps<NavigationRailProps>(), {
    isLabeled: false
});

function rootDestonation(): boolean {
    return route.meta?.isRoot as boolean;
}

function pathIsRoute(path: string): boolean {
    return route.path == path;
}

function symbolAnim(path: string) {
    return pathIsRoute(path) ? 'to-filled-symbol' : 'to-outlined-symbol';
}

function colorIcon(path: string) {
    return pathIsRoute(path) ? 'text-on-secondary-container' : 'text-on-surface-variant';
}

function railDensity() {
    return display.lgAndDown.value && !display.mdAndDown.value ? (props.isLabeled ? 'compact' : 'default') : 'default';
}

function railListItemHeight() {
    return display.lgAndDown.value && !display.mdAndDown.value ? (props.isLabeled ? '32' : '56') : '56';
}

function goBack(): void {
    route.meta?.isRoot ? null : window.history.length > 2 ? router.go(-1) : router.push('/');
}

function goHome(): void {
    router.push('/');
}

function navigate(path: RouteLocationRaw): void {
    router.push(path);
}
</script>

<template>
    <VNavigationDrawer
        app
        :rail-width="80"
        :class="{ 'rounded-e-xl bg-surface-3': display.mdAndDown.value }"
        v-model="globalStore.rail"
        :rail="!display.xlAndUp.value && !display.mdAndDown.value">
        <div
            class="ps-4"
            :style="styles.fullHeight">
            <VAppBarNavIcon
                v-if="!rootDestonation() && !display.mdAndDown.value"
                @click="goBack()"
                icon="arrow_back"
                color="on-surface" />

            <VFadeTransition :leave-absolute="true">
                <VAppBarNavIcon
                    v-if="rootDestonation() && !display.mdAndDown.value"
                    color="transparent"
                    @click="goHome()">
                    <RailLogo />
                </VAppBarNavIcon>
            </VFadeTransition>

            <VAppBarNavIcon
                v-if="display.mdAndDown.value"
                @click="globalStore.rail = !globalStore.rail"
                variant="text"
                color="on-surface"
                icon="menu_open" />
        </div>
        <VRow
            align="center"
            justify="center"
            :style="styles.centeredVRow">
            <VCol>
                <VList class="bg-transparent">
                    <div
                        class="my-2"
                        @click="navigate(item.to)"
                        v-for="(item, i) in NAVIGATION_ITEMS"
                        :key="i">
                        <VListItem
                            :height="railListItemHeight()"
                            :style="
                                display.xlAndUp.value || display.mdAndDown.value
                                    ? baseStyles.allTransition
                                    : ['justify-self: center; justify-content: center;']
                            "
                            :density="railDensity()"
                            :value="item"
                            elevation="0"
                            variant="elevated"
                            class="bg-transparent mx-1"
                            :class="{ 'bg-secondary-container': pathIsRoute(item.to) }"
                            :to="item.to">
                            <template
                                v-slot:prepend
                                v-if="display.xlAndUp.value || display.mdAndDown.value">
                                <VIcon
                                    :icon="item.icon"
                                    :class="[symbolAnim(item.to), colorIcon(item.to)]" />
                            </template>
                            <VIcon
                                v-if="display.lgAndDown.value && !display.mdAndDown.value"
                                :icon="item.icon"
                                :class="[symbolAnim(item.to), colorIcon(item.to)]" />
                            <VListItemTitle
                                v-if="display.xlAndUp.value || display.mdAndDown.value"
                                :class="pathIsRoute(item.to) ? 'on-surface font-weight-medium' : 'on-surface-variant'">
                                {{ t(`$vuetify.pages.${item.pathName}.railTitle`) }}
                            </VListItemTitle>
                        </VListItem>
                        <div
                            class="text-center mt-2 text-subtitle-2"
                            :class="pathIsRoute(item.to) ? 'on-surface font-weight-medium' : 'on-surface-variant'"
                            v-if="props.isLabeled && display.lgAndDown.value && !display.mdAndDown.value">
                            <span>{{ t(`$vuetify.pages.${item.pathName}.railTitle`) }}</span>
                        </div>
                    </div>
                </VList>
            </VCol>
        </VRow>
    </VNavigationDrawer>
</template>

<style scoped>
.v-list-item__prepend > .v-icon,
.v-list-item__append > .v-icon {
    opacity: 1 !important;
}
.v-list-item--density-compact.v-list-item--one-line {
    min-height: 32px;
    padding-top: -4px;
    padding-bottom: -4px;
}
</style>
