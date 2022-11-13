<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

import Interact from '@/components/interact/Interact.vue';

import { useLocalizeTranslate } from '@/locales/localize-translate';

const display = useDisplay();

const { t } = useLocalizeTranslate('home');

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
    <VCard
        class="pa-3"
        color="surface-variant">
        <div
            :class="`${display.xs.value ? 'text-h3' : 'text-h2'}`"
            class="font-weight-bold mb-4"
            v-text="welcomeWord" />
        <div>
            {{ t('bio.messageMe') }}
            <div class="ma-2" />
            {{ t('bio.messageGoal') }}
        </div>
        <div class="mt-4 mb-2">
            <Interact
                v-slot="{ isInteracted }"
                :is-inline-box-container="true">
                <VBtn
                    to="/about"
                    append-icon="arrow_right_alt"
                    class="border-radius-transition"
                    :rounded="isInteracted ? 'sm' : 'elg'">
                    {{ t('bio.action') }}
                </VBtn>
            </Interact>
        </div>
    </VCard>
</template>
