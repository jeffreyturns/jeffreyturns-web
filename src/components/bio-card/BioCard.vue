<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay, useLocale } from 'vuetify/lib/framework.mjs';

import Interact from '@/components/material-3/interact/Interact.vue';

import * as baseStyles from '@/styles/styles.css';

const display = useDisplay();

const { t } = useLocale();

const welcomeWord = computed(() => {
    const welcomeWords = [
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
    const randomFrom = (array: string[]): string => array[Math.floor(Math.random() * array.length)];

    return `${randomFrom(welcomeWords)}!`;
});
</script>

<template>
    <VCard class="pa-3">
        <div
            :class="`${display.xs.value ? 'text-h3' : 'text-h2'}`"
            class="font-weight-bold mb-4"
            v-text="welcomeWord" />
        <div>
            {{ t('$vuetify.pages.home.bio.messageMe') }}
            <div class="ma-2" />
            {{ t('$vuetify.pages.home.bio.messageGoal') }}
        </div>
        <div class="mt-4 mb-2">
            <Interact v-slot="{ isInteracted }" :is-inline-box-container="true">
                <VBtn
                    to="/about"
                    append-icon="arrow_right_alt"
                    :style="baseStyles.borderRadiusTransition"
                    :rounded="isInteracted ? 'sm' : 'elg'">
                    {{ t('$vuetify.pages.home.bio.action') }}
                </VBtn>
            </Interact>
        </div>
    </VCard>
</template>
