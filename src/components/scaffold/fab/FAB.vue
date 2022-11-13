<script setup lang="ts">
import { useScrollStore } from '@/stores/scroll';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const scrollStore = useScrollStore();
const route = useRoute();

const isRootPage = computed(() => route.meta?.isRoot as boolean);

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
            v-show="scrollStore.getIsTopFABVisible()"
            position="fixed"
            location="bottom right"
            elevation="1"
            color="primary-container"
            icon="vertical_align_top"
            size="large"
            rounded="lg"
            :class="{ fab: isRootPage }"
            class="me-4 mb-4 text-on-primary-container"
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
