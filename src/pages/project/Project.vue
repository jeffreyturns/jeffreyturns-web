<script setup lang="ts">
import { onMounted } from 'vue';

import { useRoute } from 'vue-router';
import { useProjectStore } from '@/stores/project';

import ProjectView from '@/components/project/project-view/ProjectView.vue';

const projectStore = useProjectStore();
const route = useRoute();

onMounted(() => {
    projectStore.fetch((route.params.name as string) ?? '');
});
</script>

<template>
    <div>
        <ProjectView
            v-if="projectStore.isLoaded()"
            :entry="projectStore.list()" />
    </div>
</template>
