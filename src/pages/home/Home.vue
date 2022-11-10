<script setup lang="ts">
import { onMounted } from 'vue';

import Banner from '@/components/banners/banner/Banner.vue';
import ExplorableImageCard from '@/components/explorable-image-card/ExplorableImageCard.vue';

import { useFavoritesStore } from '@/stores/favorites';
import ProjectCard from '@/components/project/project-card/ProjectCard.vue';
import { useLocale, useDisplay } from 'vuetify/lib/framework.mjs';
import ProjectCardSkeleton from '@/components/project/project-card/ProjectCardSkeleton.vue';

import BioCard from '@/components/bio-card/BioCard.vue';

export type RowColsArray = (number | undefined)[];

const favoritesStore = useFavoritesStore();
const display = useDisplay();
const { t } = useLocale();

onMounted(() => {
    favoritesStore.fetchData();
});

const collectionRow: RowColsArray = [4, 2, 6];

const collection = [
    {
        isPaint: true,
        image: {
            title: 'Cloud Space',
            url: 'https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/headers/image_4.png'
        }
        // button: {
        //     title: '$vuetify.common.explore',
        //     url: '/collections/imagination',
        //     isRouterPath: true
        // }
    },
    {
        isPaint: true,
        image: {
            title: 'Sun Collpase',
            url: 'https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/headers/image_2.png'
        }
        // button: {
        //     title: '$vuetify.common.explore',
        //     url: '/collections/imagination',
        //     isRouterPath: true
        // }
    },
    {
        isPaint: true,
        image: {
            title: 'Undiscovered Flower',
            url: 'https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/headers/image_1.png'
        }
        // button: {
        //     title: '$vuetify.common.explore',
        //     url: '/collections/imagination',
        //     isRouterPath: true
        // }
    }
];
</script>

<template>
    <div>
        <Banner
            v-if="false"
            state="warning"
            type="normal"
            text="Page under building."
            :dismissible="true" />

        <VContainer fluid>
            <VRow
                justify="center"
                class="pt-8">
                <VCol
                    :lg="7"
                    :sm="12">
                    <div
                        :class="`${display.xs.value ? 'text-h2' : 'text-h1'}`"
                        class="font-weight-thin">
                        <i
                            class="font-weight-medium"
                            v-text="t('$vuetify.pages.home.quote.first')" />
                        {{ t('$vuetify.pages.home.quote.second') }}
                        <i
                            class="font-weight-medium"
                            v-text="t('$vuetify.pages.home.quote.third')" />
                        <!-- <i class="text-h6"> 一 Seishuu Handa</i> -->
                    </div>
                    <VRow
                        no-gutters
                        class="mt-6">
                        <VCol
                            v-for="(it, i) in collectionRow"
                            :cols="it"
                            :key="i">
                            <ExplorableImageCard :entry="collection[i]" />
                        </VCol>
                    </VRow>
                </VCol>
                <VCol
                    :lg="5"
                    :sm="12">
                    <BioCard />
                </VCol>
            </VRow>
        </VContainer>
        <VContainer class="text-center">
            <div
                class="text-h4 font-weight-medium"
                v-text="t('$vuetify.pages.home.favoriteProjects')" />
        </VContainer>
        <VContainer
            full-height
            fluid>
            <VRow
                align="center"
                justify="center">
                <ProjectCard
                    v-for="(it, i) in favoritesStore.list()"
                    :key="i"
                    :entry="it" />
                <ProjectCardSkeleton
                    :show="!favoritesStore.isLoaded()"
                    v-for="it in 5"
                    :key="it" />
            </VRow>
        </VContainer>
    </div>
</template>
