<script setup lang="ts">
import { onMounted } from 'vue';

import RemoteBanner from '@/components/banners/remote-banner/RemoteBanner.vue';
import ExplorableImageCard from '@/components/explorable-image-card/ExplorableImageCard.vue';

import { useFavoritesStore } from '@/stores/favorites';
import ProjectCard from '@/components/project/project-card/ProjectCard.vue';

export type RowColsArray = (number | undefined)[];

const favoritesStore = useFavoritesStore();

onMounted(() => {
    favoritesStore.fetchData();
});

const welcomeArr: string[] = [
    'Welcome',
    'I mirëpritur',
    'Dobrodošli',
    'Dobrodošli',
    'Vitejte',
    'Welkom',
    'Tere tulemast',
    'Tervetuloa',
    'Bienvenue',
    'Herzlich willkommen',
    'Καλως ΗΡΘΑΤΕ',
    'Üdvözöljük',
    'Velkominn',
    'Fáilte',
    'Benvenuto',
    'Добредојден',
    'Merhba',
    'Velkommen',
    'Witamy',
    'Bem-vinda',
    'Bine ati venit',
    'Bienvenidos',
    'Välkommen',
    'Croeso',
    'באַגריסן',
    'ようこそ',
    'Ласкаво просимо'
];

function welcomeWord(): string {
    // return `${this.welcomeArr[Math.floor(Math.random() * this.welcomeArr.length)]}!`;
    return `ようこそ!`;
}

const collectionRow: RowColsArray = [4, 2, 6];

const collection = [
    {
        isPaint: true,
        image: {
            title: 'Cloud Space',
            url: 'https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/headers/image_4.png'
        },
        button: {
            title: 'Explore',
            url: '/collections/imagination',
            isRouterPath: true
        }
    },
    {
        isPaint: true,
        image: {
            title: 'Sun Collpase',
            url: 'https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/headers/image_2.png'
        },
        button: {
            title: 'Explore',
            url: '/collections/imagination',
            isRouterPath: true
        }
    },
    {
        isPaint: true,
        image: {
            title: 'Undiscovered Flower',
            url: 'https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/headers/image_1.png'
        },
        button: {
            title: 'Explore',
            url: '/collections/imagination',
            isRouterPath: true
        }
    }
];
</script>

<template>
    <div>
        <RemoteBanner
            state="info"
            type="bold"
            text="Page under building."
            :dismissible="false" />

        <VContainer fluid>
            <VRow
                justify="center"
                class="pt-8">
                <VCol
                    :lg="7"
                    :sm="12">
                    <div
                        :class="`${$vuetify.display.xs ? 'text-h2' : 'text-h1'}`"
                        class="font-weight-thin">
                        <i class="font-weight-medium">Simplicity</i>
                        is the easiest path to true
                        <i class="font-weight-medium">beauty.</i>
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
                    <VCard class="pa-3">
                        <div
                            :class="`${$vuetify.display.xs ? 'text-h3' : 'text-h2'}`"
                            class="font-weight-bold mb-4"
                            v-text="welcomeWord()" />
                        <div class="text-subimageTitle-1">
                            I’m Jeffrey Turns, a 19-year-old developer and UI/UX designer from Ukraine. Right now I am studying as computer engineer.
                            <div class="ma-2" />
                            My goal is to create solutions that combine Google latest design guidelines and modern and innovative digital technologies.
                        </div>
                        <div class="my-2">
                            <VBtn
                                to="/about"
                                variant="outlined"
                                class="mt-2"
                                append-icon="arrow_right_alt">
                                To about
                            </VBtn>
                        </div>
                    </VCard>
                </VCol>
            </VRow>
        </VContainer>
        <VContainer class="text-center">
            <div
                class="text-h4 font-weight-medium"
                v-text="`Favorites projects`" />
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
            </VRow>
        </VContainer>
    </div>
</template>
