<script setup lang="ts">
import { mergeProps, ref } from 'vue';

import { menu as menuConfig } from '@/common/components-config';
import { Language, changeLocale, LANGUAGE_VALUES } from '@/composables/useLocaleManager';
import { useLocale } from 'vuetify/lib/framework.mjs';
import { useAppTitle } from '@/composables/useAppTitle';
import { useRoute } from 'vue-router';

const locale = useLocale();
const route = useRoute();

const model = ref(false);
const anim = ref('');

function change(value: Language) {
    changeLocale(value);
    locale.current.value = value;
    useAppTitle(locale.t(`$vuetify.pages.${route.meta?.title}.documentTitle`));
}
</script>

<template>
    <VMenu
        v-model="model"
        location="bottom right">
        <template v-slot:activator="{ props: menu }">
            <VTooltip
                :disabled="model"
                location="top"
                :open-delay="450">
                <template v-slot:activator="{ props: tooltip }">
                    <VBtn
                        class="ms-1"
                        icon="translate"
                        :class="anim"
                        :color="model ? 'primary' : 'on-surface'"
                        v-bind="mergeProps(menu, tooltip)" />
                </template>
                <span>{{ locale.t('$vuetify.tooltips.language') }}</span>
            </VTooltip>
        </template>
        <VDefaultsProvider :defaults="menuConfig">
            <VList>
                <VListItem
                    v-for="(it, i) in LANGUAGE_VALUES"
                    :key="i"
                    :prepend-icon="locale.current.value == it.value ? 'done' : ' '"
                    @click="change(it.value)"
                    :value="i">
                    <VListItemTitle v-text="it.title" />
                </VListItem>
            </VList>
        </VDefaultsProvider>
    </VMenu>
</template>
