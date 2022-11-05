<script setup lang="ts">
import { CSSProperties } from 'vue';

interface ProjectCardSkeletonProps {
    show: boolean;
}

const props = withDefaults(defineProps<ProjectCardSkeletonProps>(), {
    show: true
});

const card: CSSProperties = {
    height: '360px',
    width: '400px'
};

const image: CSSProperties = {
    height: '200px',
    width: '400px'
};

const title: CSSProperties = {
    height: '32px',
    width: '64px'
};

const description1: CSSProperties = {
    height: '24px',
    width: '128px'
};

const description2: CSSProperties = {
    height: '24px',
    width: '180px'
};

const chip: CSSProperties = {
    height: '32px',
    width: '56px'
};
</script>

<template>
    <div
        v-if="props.show"
        :style="card"
        class="ma-1 bg-surface-1 rounded-lg">
        <div
            class="bg-surface-4 rounded-lg"
            :style="image"></div>
        <VCardItem>
            <div
                :style="title"
                class="bg-surface-4 rounded-lg" />
        </VCardItem>

        <div
            :style="description1"
            class="bg-surface-4 rounded-lg ms-4" />
        <div
            :style="description2"
            class="bg-surface-4 rounded-lg ms-4 mt-1 mb-1" />

        <VCardActions class="ms-2">
            <div
                :style="chip"
                class="bg-surface-4 rounded-lg me-1" />
            <div
                :style="chip"
                class="bg-surface-4 rounded-lg me-1" />
            <div
                :style="chip"
                class="bg-surface-4 rounded-lg" />
        </VCardActions>
    </div>
</template>
