<script setup lang="ts">
import { mergeProps, ref, watch } from 'vue';

import { getPrefTheme, setPrefTheme, Theme, toThemeEnums, useThemeManager } from '@/composables/useThemeManager';

import { THEME_VALUES } from '@/common/constants';

import { useTheme as useFrameworkTheme } from 'vuetify/lib/framework.mjs';

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
        <VList>
            <VListItem
                v-for="(item, index) in THEME_VALUES"
                :key="index"
                :prepend-icon="currentTheme == item.value ? 'done' : ' '"
                @click="changeTheme(item.value)"
                :value="index">
                <VListItemTitle v-text="item.title" />
            </VListItem>
        </VList>
    </VMenu>
</template>