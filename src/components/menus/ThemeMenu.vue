<script setup lang="ts">
import { mergeProps, ref, watch } from 'vue';

import { getPrefTheme, setPrefTheme, Theme, toThemeEnums, useThemeManager } from '@/composables/useThemeManager';

import { THEME_VALUES } from '@/common/constants';

import { useTheme as useFrameworkTheme } from 'vuetify/lib/framework.mjs';

import { menu as menuConfig } from '@/common/components-config';

const fmTheme = useFrameworkTheme();

const currentTheme = ref(toThemeEnums(getPrefTheme()));

const model = ref(false);
const anim = ref('');

watch(
    model,
    async () => {
        anim.value = model.value ? 'to-filled-symbol' : 'to-outlined-symbol';
    },
    {
        immediate: false,
        deep: false
    }
);

function getIcon(): string {
    switch (currentTheme.value) {
        case Theme.AUTO: {
            return 'brightness_6';
        }
        case Theme.LIGHT: {
            return 'light_mode';
        }
        case Theme.DARK: {
            return 'dark_mode';
        }
        default: {
            return 'dark_mode';
        }
    }
}

function changeTheme(value: Theme) {
    setPrefTheme(value);
    useThemeManager(fmTheme);
    currentTheme.value = value;
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
                        :icon="getIcon()"
                        :class="anim"
                        :color="model ? 'primary' : 'on-surface'"
                        v-bind="mergeProps(menu, tooltip)" />
                </template>
                <span>{{ `t('tooltips.theme')` }}</span>
            </VTooltip>
        </template>
        <VDefaultsProvider :defaults="menuConfig">
            <VList>
                <VListItem
                    v-for="(it, i) in THEME_VALUES"
                    :key="i"
                    :prepend-icon="currentTheme == it.value ? 'done' : ' '"
                    @click="changeTheme(it.value)"
                    :value="i">
                    <VListItemTitle v-text="it.title" />
                </VListItem>
            </VList>
        </VDefaultsProvider>
    </VMenu>
</template>
