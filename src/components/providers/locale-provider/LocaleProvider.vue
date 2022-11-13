<script setup lang="ts">
import { computed, onMounted } from 'vue';

import { useLocaleManager } from '@/composables/locale';
import { useLocale } from 'vuetify/lib/framework.mjs';

const frameworkLocale = useLocale();

const locale = computed(() => useLocaleManager());

onMounted(() => {
    frameworkLocale.current.value = locale.value;
});
</script>

<template>
    <VLocaleProvider :locale="locale">
        <slot />
    </VLocaleProvider>
</template>
