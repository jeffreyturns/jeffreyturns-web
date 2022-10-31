<script setup lang="ts">
interface ProjectCardSkeletonProps {
    show: boolean;
}

const props = withDefaults(defineProps<ProjectCardSkeletonProps>(), {
    show: true
});
</script>

<template>
    <div
        v-if="props.show"
        style="width: 400px; height: 360px"
        class="ma-1 bg-surface-1 rounded-lg">
        <div
            class="bg-surface-4 rounded-lg"
            style="width: 400px; height: 200px"></div>
        <VCardItem>
            <div
                style="height: 32px; width: 64px"
                class="bg-surface-4 rounded-lg" />
        </VCardItem>

        <div
            style="height: 24px; width: 128px"
            class="bg-surface-4 rounded-lg ms-4" />
        <div
            style="height: 24px; width: 180px"
            class="bg-surface-4 rounded-lg ms-4 mt-1 mb-1" />

        <VCardActions class="ms-2">
            <div
                style="height: 32px; width: 56px"
                class="bg-surface-4 rounded-lg me-1" />
            <div
                style="height: 32px; width: 56px"
                class="bg-surface-4 rounded-lg me-1" />
            <div
                style="height: 32px; width: 56px"
                class="bg-surface-4 rounded-lg" />
        </VCardActions>
    </div>
</template>
