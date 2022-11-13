<script setup lang="ts">
import { mergeProps, ref } from 'vue';

import { getPrefTheme, setPrefTheme, Theme, toThemeEnums, useThemeManager, THEME_VALUES } from '@/composables/theme';

import { useLocale, useTheme as useFrameworkTheme } from 'vuetify/lib/framework.mjs';

import { menu as menuConfig } from '@/common/components-config';

import Interact from '@/components/interact/Interact.vue';

const fmTheme = useFrameworkTheme();
const { t } = useLocale();

const currentTheme = ref(toThemeEnums(getPrefTheme()));

const model = ref(false);

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

function change(value: Theme) {
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
                    <VHover v-slot="{ isHovering, props }">
                        <Interact
                            v-slot="{ isInteracted }"
                            :is-inline-box-container="true">
                            <VBtn
                                class="ms-1 universal-transition"
                                :rounded="isInteracted ? 'md' : 'full'"
                                icon
                                :class="[isHovering ? 'md-sym-to-600' : 'md-sym-to-400']"
                                :color="model ? 'primary' : 'on-surface'"
                                v-bind="mergeProps(props, menu, tooltip)">
                                <VIcon :class="model ? 'primary' : isHovering ? 'on-surface' : 'on-surface-variant'">{{ getIcon() }}</VIcon>
                            </VBtn>
                        </Interact>
                    </VHover>
                </template>
                <span>{{ t('$vuetify.tooltips.theme') }}</span>
            </VTooltip>
        </template>
        <VDefaultsProvider :defaults="menuConfig">
            <VList>
                <VListItem
                    v-for="(it, i) in THEME_VALUES"
                    :key="i"
                    :prepend-icon="currentTheme == it.value ? 'done' : ' '"
                    @click="change(it.value)"
                    :value="i">
                    <VListItemTitle v-text="t(it.title)" />
                </VListItem>
            </VList>
        </VDefaultsProvider>
    </VMenu>
</template>
