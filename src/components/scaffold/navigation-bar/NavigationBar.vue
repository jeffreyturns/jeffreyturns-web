<script setup lang="ts">
import { NAVIGATION_ITEMS } from '@/common/constants';

import * as styles from './navigation-bar.css';

function barItemWidth(): string {
    return `${window.innerWidth / NAVIGATION_ITEMS.length}px`;
}
</script>

<template>
    <VBottomNavigation
        grow
        mandatory
        mode="shift">
        <VBtn
            v-ripple="false"
            :value="item.to"
            v-for="(item, i) in NAVIGATION_ITEMS"
            :key="i"
            class="pill-btn"
            :max-width="barItemWidth"
            :to="item.to">
            <div
                v-ripple
                :class="{ 'bg-secondary-container': $route.path == item.to }"
                :style="styles.pill"
                class="mb-1">
                <VIcon
                    :icon="item.icon"
                    :color="$route.path == item.to ? 'on-secondary-container' : 'on-surface-variant'"
                    :class="$route.path == item.to ? 'to-filled-symbol' : 'to-outlined-symbol'" />
            </div>
            <span v-text="item.text" />
        </VBtn>
    </VBottomNavigation>
</template>

<style lang="scss">
.pill-btn.v-btn:hover > .v-btn__overlay {
    opacity: calc(0 * var(--v-theme-overlay-multiplier)) !important;
}
</style>
