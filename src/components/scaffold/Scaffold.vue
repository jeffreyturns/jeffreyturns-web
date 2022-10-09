<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';

const globalStore = useGlobalStore();
</script>

<template>
    <div v-if="!$vuetify.display.xs">
        <slot name="rail" />
    </div>
    <slot name="top" />
    <div v-if="!globalStore.isNotFoundPage">
        <slot name="content" />
    </div>
    <div v-if="$vuetify.display.xs">
        <slot name="bar" />
    </div>
    <slot name="fab" />
</template>
