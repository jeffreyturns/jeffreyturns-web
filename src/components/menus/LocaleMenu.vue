<script setup lang="ts">
import { mergeProps, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useLocale } from 'vuetify/lib/framework.mjs';
import { useAppTitle } from '@/composables/title';

import { menu as menuConfig } from '@/common/components-config';
import { Language, changeLocale, LANGUAGE_VALUES } from '@/composables/locale';

import Interact from '@/components/interact/Interact.vue';

const locale = useLocale();
const route = useRoute();

const model = ref(false);

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
                    <VHover v-slot="{ isHovering, props }">
                        <Interact
                            v-slot="{ isInteracted }"
                            :is-inline-box-container="true">
                            <TextIconBtn
                                class="ms-1 universal-transition"
                                :rounded="isInteracted ? 'md' : 'full'"
                                :class="[isHovering ? 'md-sym-to-600' : 'md-sym-to-400']"
                                :color="model ? 'primary' : 'on-surface'"
                                v-bind="mergeProps(props, menu, tooltip)">
                                <VIcon :class="model ? 'primary' : isHovering ? 'on-surface' : 'on-surface-variant'">translate</VIcon>
                            </TextIconBtn>
                        </Interact>
                    </VHover>
                </template>
                <span>{{ locale.t('$vuetify.tooltips.language') }}</span>
            </VTooltip>
        </template>
        <VDefaultsProvider :defaults="menuConfig">
            <VList>
                <VListItem
                    v-for="(it, i) in LANGUAGE_VALUES"
                    :key="i"
                    :prepend-icon="locale.current.value == it.value ? 'done' : 'ㅤ'"
                    @click="change(it.value)"
                    :value="i">
                    <VListItemTitle v-text="it.title" />
                </VListItem>
            </VList>
        </VDefaultsProvider>
    </VMenu>
</template>
