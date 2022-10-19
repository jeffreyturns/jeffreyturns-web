<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const globalStore = useGlobalStore();
const display = useDisplay();
const route = useRoute();

const isRootPage = computed(() => route.meta?.isRoot as boolean);
</script>

<template>
    <div v-if="!display.xs.value">
        <slot name="rail" />
    </div>
    <slot name="top" />
    <div v-if="!globalStore.isNotFoundPage && !globalStore.pageState.isError">
        <slot name="content" />
    </div>
    <div v-if="$vuetify.display.xs && isRootPage">
        <slot name="bar" />
    </div>
    <slot name="fab" />
</template>
