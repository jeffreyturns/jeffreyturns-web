<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDisplay, useLocale } from 'vuetify/lib/framework.mjs';
import WaveDivider from '@/components/wave-divider/WaveDivider.vue';
import { FooterItem } from '@/components/scaffold/footer/Footer.vue';

export interface TextColumn {
    title?: string;
    text?: string;
}

const { t, current } = useLocale();

const items = ref<Array<TextColumn>>([]);
const items2 = ref<Array<TextColumn>>([]);

const display = useDisplay();

const links: Array<FooterItem> = [
    {
        title: 'Mail',
        url: 'mailto:jeffreyturns@protonmail.com'
    }
];

watch(
    () => current,
    () => {
        items.value = [
            {
                text: t('$vuetify.pages.about.textColumn.aboutText')
            },
            {
                title: t('$vuetify.pages.about.textColumn.copyrightTitle'),
                text: t('$vuetify.pages.about.textColumn.copyrightText1')
            },
            {
                text: t('$vuetify.pages.about.textColumn.copyrightText2')
            }
        ];
        items2.value = [
            {
                title: t('$vuetify.pages.about.textColumn.linkTitle'),
                text: t('$vuetify.pages.about.textColumn.linkText')
            },
            {
                title: t('$vuetify.pages.about.textColumn.contactTitle'),
                text: t('$vuetify.pages.about.textColumn.contactText')
            }
        ];
    },

    { immediate: true, deep: true }
);

function openSaveLife(): void {
    window.open('https://savelife.in.ua/');
}
</script>

<template>
    <VContainer>
        <VRow>
            <VCol :cols="12">
                <div class="text-center rounded-xl d-flex flex-column justify-center pa-12">
                    <div
                        :class="`${display.xs.value ? 'text-h2' : 'text-h1'}`"
                        class="font-weight-medium my-4 text-high-emphasis"
                        v-text="t('$vuetify.pages.about.documentTitle')" />
                    <div
                        :class="`${display.xs.value ? 'text-h6' : 'text-h5'}`"
                        class="mb-4 text-medium-emphasis"
                        v-text="t('$vuetify.pages.about.subtitleHeader')"  />
                </div>
            </VCol>
            <VCol>
                <VCard
                    :rounded="0"
                    class="ma-2"
                    color="transparent"
                    v-for="(it, i) in items"
                    :key="i">
                    <div
                        v-if="it.title != undefined"
                        class="text-h5 font-weight-medium mb-2 mt-4"
                        v-text="it.title" />
                    <div
                        v-if="it.text != undefined"
                        class="text-body-1 mt-1"
                        v-text="it.text" />
                </VCard>
            </VCol>
        </VRow>
        <div class="text-center mt-6">
            <WaveDivider />
        </div>
        <VRow>
            <VCol>
                <VCard
                    :rounded="0"
                    class="ma-2"
                    color="transparent"
                    v-for="(it, i) in items2"
                    :key="i">
                    <div
                        v-if="it.title != undefined"
                        class="text-h5 font-weight-medium mb-2 mt-4"
                        v-text="it.title" />
                    <div
                        v-if="it.text != undefined"
                        class="text-body-1 mt-1"
                        v-text="it.text" />
                </VCard>
                <VBtn
                    v-for="it in links"
                    :key="it.title"
                    :href="it.url"
                    class="me-2 my-4">
                    {{ it.title }}
                </VBtn>
                <div
                    class="text-center text-h6 text-decoration-underline text-primary"
                    role="button"
                    @click="openSaveLife()">
                    #GloryToUkraine
                </div>
            </VCol>
        </VRow>
    </VContainer>
</template>
