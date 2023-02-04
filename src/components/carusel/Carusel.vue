<script setup lang="ts">
import ExplorableImageCard from '@/components/explorable-image-card/ExplorableImageCard.vue';

const collection = [
    {
        isPaint: false,
        size: 400,
        image: {
            title: 'Mariupol, Ukraine',
            url: 'https://static01.nyt.com/images/2022/04/01/podcasts/01daily-1/01DAILY-mariupol-audio-app-mediumSquareAt3X-v3.jpg'
        }
    },
    {
        isPaint: false,
        size: 250,
        image: {
            title: 'Dnipro, Ukraine',
            url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Dnipro_after_Russian_missile_attack,_2023-01-14_(02-01).jpg'
        },
        button: {
            title: '$vuetify.common.explore',
            url: 'https://edition.cnn.com/2023/01/14/europe/kyiv-kharkiv-zaporizhzhia-explosion-ukraine-intl-hnk/index.html',
            isRouterPath: false
        }
    },
    {
        isPaint: false,
        size: 375,
        image: {
            title: 'Mariupol, Ukraine',
            url: 'https://www.nato.int/docu/review/images/fafcba_1_pszczel_mariupol_cnn.jpg'
        }
    },
    {
        isPaint: false,
        size: 175,
        image: {
            title: 'Mykolaiv, Ukraine',
            url: 'https://www.aljazeera.com/wp-content/uploads/2022/03/2022-03-29T135643Z_316570166_RC2DCT93X0FA_RTRMADP_3_UKRAINE-CRISIS-MYKOLAIV.jpg?resize=770%2C513&quality=80'
        },
        button: {
            title: '$vuetify.common.explore',
            url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reuters.com%2Fworld%2Feurope%2Frussian-rocket-blasts-hole-mykolaiv-administration-building-southern-ukraine-2022-03-29%2F&psig=AOvVaw34x2QwdUihtOHWl1Vcv02A&ust=1674875495431000&source=images&cd=vfe&ved=0CBEQjhxqFwoTCNjN17Hj5vwCFQAAAAAdAAAAABAJ',
            isRouterPath: false
        }
    }
];
</script>

<template>
    <VCard
        rounded="elg"
        class="scrolling-wrapper"
        color="transparent"
        :height="250">
        <VCard
            v-for="(it, i) in collection"
            :key="i"
            :height="250"
            :width="it.size"
            color="transparent"
            style="display: inline-block"
            class="mx-2">
            <ExplorableImageCard :entry="collection[i]" />
        </VCard>
    </VCard>
</template>

<style scoped>
.scrolling-wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    -ms-overflow-style: none;
    scrollbar-width: none;
}
.scrolling-wrapper::-webkit-scrollbar {
    display: none;
}
</style>
