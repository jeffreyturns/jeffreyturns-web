<script setup lang="ts">
import * as styles from './full-height-container.css';
</script>

<template>
    <VContainer
        class="surface"
        :style="styles.fullHeightContainer">
        <slot />
    </VContainer>
</template>
