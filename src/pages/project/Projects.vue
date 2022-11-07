<script setup lang="ts">
import { onMounted } from 'vue';

import { useDisplay, useLocale } from 'vuetify/lib/framework.mjs';

import { useProjectsStore } from '@/stores/projects';
import ProjectCard from '@/components/project/project-card/ProjectCard.vue';
import ProjectCardSkeleton from '@/components/project/project-card/ProjectCardSkeleton.vue';

const projectsStore = useProjectsStore();
const display = useDisplay();
const { t } = useLocale();

onMounted(() => {
    projectsStore.fetch();
});
</script>

<template>
    <div>
        <VContainer full-height>
            <VRow
                align="center"
                justify="center">
                <VCol :cols="12">
                    <VCard
                        height="600px"
                        rounded="xl">
                        <VImg
                            cover
                            :aspect-ratio="0.1"
                            gradient="to top, rgba(0,0,0,.66), rgba(0,0,0,.12)"
                            :lazy-src="require('@/assets/placeholder.svg')"
                            :src="`https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/headers/image_0.png`">
                            <div class="h-100 rounded-xl d-flex flex-column justify-center pa-12">
                                <div
                                    :class="`${display.xs.value ? 'text-h2' : 'text-h1'}`"
                                    class="font-weight-medium my-4 text-white"
                                    v-text="t('$vuetify.pages.projects.header.title')" />
                                <div
                                    :class="`${display.xs.value ? 'text-h6' : 'text-h5'}`"
                                    class="mb-4 text-white"
                                    v-text="t('$vuetify.pages.projects.header.subtitle')" />
                            </div>
                        </VImg>
                    </VCard>
                </VCol>
                <ProjectCard
                    v-for="(it, i) in projectsStore.list()"
                    :key="i"
                    :entry="it" />
                <ProjectCardSkeleton
                    :show="!projectsStore.isLoaded()"
                    v-for="it in 5"
                    :key="it" />
            </VRow>
        </VContainer>
    </div>
</template>
