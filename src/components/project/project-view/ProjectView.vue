<script setup lang="ts">
import { Project } from '@/stores/project';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const display = useDisplay();

interface ProjectViewProps {
    entry: Project;
}

const props = withDefaults(defineProps<ProjectViewProps>(), {
    entry: undefined
});
</script>

<template>
    <div>
        <VRow>
            <VCol
                :lg="6"
                :sm="12"
                :xs="12">
                <VCard class="h-100 rounded-xl d-flex flex-column justify-center pa-12">
                    <div
                        :class="`${display.xs.value ? 'text-h2' : 'text-h1'}`"
                        class="font-weight-medium my-4"
                        v-text="props.entry.title" />
                    <div
                        :class="`${display.xs.value ? 'text-h6' : 'text-h5'}`"
                        class="mb-4"
                        v-text="props.entry.description" />
                    <div
                        v-if="props.entry.download.length > 0"
                        class="my-1">
                        <div
                            class="my-2"
                            v-text="`Download from:`" />
                        <VBtn
                            class="me-1"
                            v-for="(it, i) in props.entry.download"
                            :key="i"
                            :href="it.url">
                            {{ it.title }}
                        </VBtn>
                    </div>
                </VCard>
            </VCol>
            <VCol
                :lg="6"
                :sm="12"
                :xs="12">
                <VCard
                    height="370px"
                    class="rounded-xl bordered-alpha">
                    <VImg
                        cover
                        :aspect-ratio="0.1"
                        :lazy-src="require('@/assets/placeholder.svg')"
                        :src="`https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/${entry?.header}`" />
                </VCard>
            </VCol>
        </VRow>
        <VContainer>
            <VRow
                align="center"
                justify="center">
                <VCol>
                    <VCard
                        color="surface-variant"
                        v-for="(it, i) in props.entry.sections"
                        :key="i"
                        class="ma-4">
                        <VCard class="bordered-alpha">
                            <VImg
                                :aspect-ratio="12 / 9"
                                cover
                                max-height="799"
                                :lazy-src="require('@/assets/placeholder.svg')"
                                :src="`https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/${it.mockup}`" />
                        </VCard>
                        <VCardItem v-if="it.title != ''">
                            <div
                                class="text-h3 mt-4 mb-2"
                                v-text="it.title" />
                        </VCardItem>

                        <VCardItem v-if="it.title != ''">
                            <div
                                v-if="it.description != ''"
                                class="text-h6 mt-2 mb-4"
                                v-text="it.description" />
                        </VCardItem>
                    </VCard>
                </VCol>
            </VRow>
        </VContainer>
    </div>
</template>
