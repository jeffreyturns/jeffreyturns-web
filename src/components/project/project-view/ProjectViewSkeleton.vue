<script setup lang="ts">
import { CSSProperties } from 'vue';

const headerTitle: CSSProperties = {
    height: '96px',
    width: '400px'
};

const headerSubtitle1: CSSProperties = {
    height: '32px',
    width: '270px'
};

const headerSubtitle2: CSSProperties = {
    height: '32px',
    width: '300px'
};

const headerSubtitle3: CSSProperties = {
    height: '32px',
    width: '320px'
};

const titleSection: CSSProperties = {
    height: '50px',
    width: '400px'
};

const subtitleSection1: CSSProperties = {
    height: '32px',
    width: '300px'
};

const subtitleSection2: CSSProperties = {
    height: '32px',
    width: '360px'
};
</script>

<template>
    <VContainer>
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
                        :style="headerTitle"
                        class="bg-surface-1 rounded-pill" />
                    <div
                        :style="headerSubtitle1"
                        class="bg-surface-1 rounded-pill mt-12" />
                    <div
                        :style="headerSubtitle2"
                        class="bg-surface-1 rounded-pill mt-1" />
                    <div
                        :style="headerSubtitle3"
                        class="bg-surface-1 rounded-pill mt-1" />
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
                    class="bordered-alpha"></VCard>
            </VCol>
        </VRow>
        <VCol class="d-flex justify-center">
            <div class="w-100">
                <VCard
                    color="surface-variant"
                    v-for="it in 5"
                    :key="it"
                    rounded="xl"
                    class="my-4">
                    <div class="pa-4">
                        <div
                            :style="titleSection"
                            class="bg-surface-3 rounded-pill" />
                        <div
                            :style="subtitleSection1"
                            class="bg-surface-3 rounded-pill mt-4" />
                        <div
                            :style="subtitleSection2"
                            class="bg-surface-3 rounded-pill mt-1" />
                    </div>
                    <VCard
                        rounded="xl"
                        color="surface-4"
                        class="w-100"
                        :height="799"></VCard>
                </VCard>
            </div>
        </VCol>
    </VContainer>
</template>
