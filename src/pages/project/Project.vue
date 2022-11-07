<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

import { useRoute } from 'vue-router';
import { useProjectStore } from '@/stores/project';

import ProjectView from '@/components/project/project-view/ProjectView.vue';
import ProjectViewSkeleton from '@/components/project/project-view/ProjectViewSkeleton.vue';

const projectStore = useProjectStore();
const route = useRoute();

onMounted(() => {
    projectStore.fetch((route.params.name as string) ?? '');
});

onUnmounted(() => {
    projectStore.clear();
});
</script>

<template>
    <div>
        <ProjectViewSkeleton v-if="!projectStore.isLoaded()" />
        <ProjectView :entry="projectStore.list()" />
    </div>
</template>
