<script setup lang="ts">
import { onMounted, watch } from 'vue';

import { useTheme } from 'vuetify/lib/framework.mjs';
import { useThemeManager } from '@/composables/theme';
import { useThemedScrollbars } from '@/composables/scrollbar';

onMounted(() => {
    useThemeManager(theme);
});

const theme = useTheme();

watch(
    () => theme.global.name,
    name => {
        useThemedScrollbars(name.value == 'dark');
    },
    { immediate: true, deep: true }
);
</script>

<template>
    <slot />
</template>
