<script setup lang="ts">
import { onMounted } from 'vue';

import { useFavoritesStore } from '@/stores/favorites';
import { useLocalizeTranslate } from '@/locales/localize-translate';
import { useDisplay } from 'vuetify/lib/framework.mjs';

import ProjectCard from '@/components/project/project-card/ProjectCard.vue';
import ProjectCardSkeleton from '@/components/project/project-card/ProjectCardSkeleton.vue';
import Banner from '@/components/banners/banner/Banner.vue';
import ExplorableImageCard from '@/components/explorable-image-card/ExplorableImageCard.vue';
import BioCard from '@/components/bio-card/BioCard.vue';

export type RowColsArray = (number | undefined)[];

const favoritesStore = useFavoritesStore();
const display = useDisplay();
const { t } = useLocalizeTranslate('home');

onMounted(() => {
    favoritesStore.fetchData();
});

const collectionRow: RowColsArray = [4, 2, 6];

const collection = [
    {
        isPaint: false,
        image: {
            title: 'Matsuyama, Japan',
            url: 'https://images.unsplash.com/photo-1644925745420-4cad6fc393f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        button: {
            title: '$vuetify.common.explore',
            url: 'https://unsplash.com/photos/PZnzcKJ-KYI',
            isRouterPath: false
        }
    },
    {
        isPaint: false,
        image: {
            title: 'Matsuyama, Japan',
            url: 'https://images.unsplash.com/photo-1653092331744-4072328aea2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
        },
        button: {
            title: '$vuetify.common.explore',
            url: 'https://unsplash.com/photos/r_TNGZ6UaW0',
            isRouterPath: false
        }
    },
    {
        isPaint: false,
        image: {
            title: 'Matsuyama, Japan',
            url: 'https://images.unsplash.com/photo-1653496630706-282c6fdd8de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        button: {
            title: '$vuetify.common.explore',
            url: 'https://unsplash.com/photos/p5-smbiZlQE',
            isRouterPath: false
        }
    }
];

const isBirthDay = (): boolean => new Date().toDateString() === new Date(`${new Date().getFullYear()}-05-05`).toDateString();
</script>

<template>
    <div>
        <Banner
            v-if="isBirthDay()"
            state="warning"
            type="bold"
            :is-rainbow="true"
            text="🍰🕯️🎈 Happy birthday, Jeffrey Turns!"
            :dismissible="!isBirthDay()" />

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
                            v-text="t('quote.first')" />
                        {{ t('quote.second') }}
                        <i
                            class="font-weight-medium"
                            v-text="t('quote.third')" />
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
                v-text="t('favoriteProjects')" />
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
