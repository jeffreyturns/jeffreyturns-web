<script setup lang="ts">
import { onMounted } from 'vue';

import { useProjectsStore } from '@/stores/projects';
import ProjectCard from '@/components/project/project-card/ProjectCard.vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const projectsStore = useProjectsStore();
const display = useDisplay();

onMounted(() => {
    projectsStore.fetch();
});
</script>

<template>
    <div>
        <VContainer
            full-height
            fluid>
            <VRow
                align="center"
                justify="center">
                <VCol :cols="12">
                    <VCard
                        height="370px"
                        class="rounded-xl">
                        <VImg
                            cover
                            gradient="to top, rgba(0,0,0,.66), rgba(0,0,0,.12)"
                            :src="`https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/headers/image_0.png`">
                            <div class="h-100 rounded-xl d-flex flex-column justify-center pa-12">
                                <div
                                    :class="`${display.xs.value ? 'text-h2' : 'text-h1'}`"
                                    class="font-weight-medium my-4 text-white"
                                    v-text="`Projects`" />
                                <div
                                    :class="`${display.xs.value ? 'text-h6' : 'text-h5'}`"
                                    class="mb-4 text-white"
                                    v-text="`All interesing works developed by me.`" />
                            </div>
                        </VImg>
                    </VCard>
                </VCol>
                <ProjectCard
                    v-for="(it, i) in projectsStore.list()"
                    :key="i"
                    :entry="it" />
            </VRow>
        </VContainer>
    </div>
</template>
