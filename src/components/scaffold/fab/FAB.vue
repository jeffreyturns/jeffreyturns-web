<script setup lang="ts">
import { useScrollStore } from '@/stores/scroll';

const scrollStore = useScrollStore();

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
</script>

<template>
    <transition name="scale-transition">
        <VBtn
            v-show="scrollStore.getIsScolled()"
            position="fixed"
            location="bottom right"
            elevation="1"
            color="primary-container"
            icon="vertical_align_top"
            size="large"
            class="me-4 mb-4 text-on-primary-container fab"
            @click="() => scrollToTop()" />
    </transition>
</template>

<style scoped>
@media screen and (max-width: 600px) {
    .fab {
        bottom: 80px !important;
    }
}
</style>
