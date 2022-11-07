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
    <VContainer class="fill-height">
        <VRow>
            <VCol
                :cols="12"
                :lg="6"
                :sm="12"
                :xs="12">
                <VCard
                    rounded="xl"
                    class="h-100 d-flex flex-column justify-center pa-12"
                    color="surface-2">
                    <div
                        :class="`${display.xs.value ? 'text-h2' : 'text-h1'}`"
                        class="font-weight-bold mb-10"
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
                :cols="12"
                :lg="6"
                :sm="12"
                :xs="12">
                <VCard
                    rounded="xl"
                    height="600px"
                    class="bordered-alpha">
                    <VImg
                        cover
                        :aspect-ratio="0.1"
                        :lazy-src="require('@/assets/placeholder.svg')"
                        :src="`https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/${entry?.header}`" />
                </VCard>
            </VCol>
        </VRow>
        <VCol class="d-flex justify-center">
            <div>
                <VCard
                    color="surface-variant"
                    v-for="(it, i) in props.entry.sections"
                    :key="i"
                    :max-width="1064"
                    rounded="xl"
                    class="my-4">
                    <VCardItem v-if="it.title != ''">
                        <div
                            class="text-h3 mt-4 mb-2 font-weight-medium"
                            v-text="it.title" />
                    </VCardItem>

                    <VCardItem v-if="it.title != ''">
                        <div
                            v-if="it.description != ''"
                            class="text-h6 mt-2 mb-4 text-medium-emphasis"
                            v-text="it.description" />
                    </VCardItem>
                    <VCard
                        class="bordered-alpha"
                        rounded="xl">
                        <VImg
                            :aspect-ratio="12 / 9"
                            cover
                            :lazy-src="require('@/assets/placeholder.svg')"
                            :src="`https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/${it.mockup}`" />
                    </VCard>
                </VCard>
            </div>
        </VCol>
    </VContainer>
</template>
