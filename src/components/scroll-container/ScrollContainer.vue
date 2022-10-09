<script setup lang="ts">
import { onMounted } from 'vue';

import { useScroll } from '@/composables/useScroll';

interface ScollContainerProps {
    isFluid?: boolean;
}

const props = withDefaults(defineProps<ScollContainerProps>(), {
    isFluid: false
});

onMounted(() => {
    useScroll().observe();
});
</script>

<template>
    <VContainer :fluid="props.isFluid">
        <slot />
    </VContainer>
</template>
