<script setup lang="ts">
import { NAVIGATION_ITEMS } from '@/common/constants';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import * as styles from './navigation-bar.css';

const route = useRoute();

const barItemWidth = computed(() => `${window.innerWidth / NAVIGATION_ITEMS.length}px`);
</script>

<template>
    <VBottomNavigation
        grow
        mandatory
        mode="shift">
        <VBtn
            v-ripple="false"
            :value="it.to"
            v-for="(it, i) in NAVIGATION_ITEMS"
            :key="i"
            class="pill-btn"
            :max-width="barItemWidth"
            :to="it.to">
            <div
                v-ripple
                :class="{ 'bg-secondary-container': route.path == it.to }"
                :style="styles.pill"
                class="mb-1">
                <VIcon
                    :icon="it.icon"
                    :color="route.path == it.to ? 'on-secondary-container' : 'on-surface-variant'"
                    :class="route.path == it.to ? 'to-filled-symbol' : 'to-outlined-symbol'" />
            </div>
            <span v-text="it.text" />
        </VBtn>
    </VBottomNavigation>
</template>

<style lang="scss">
.pill-btn.v-btn:hover > .v-btn__overlay {
    opacity: calc(0 * var(--v-theme-overlay-multiplier)) !important;
}
</style>
