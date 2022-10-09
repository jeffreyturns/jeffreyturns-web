<script setup lang="ts">
import { CSSProperties } from 'vue';

const fullHeight: CSSProperties = {
    height: '100%',
    margin: 'auto'
};
</script>

<template>
    <VContainer
        class="surface"
        :style="fullHeight">
        <slot />
    </VContainer>
</template>
