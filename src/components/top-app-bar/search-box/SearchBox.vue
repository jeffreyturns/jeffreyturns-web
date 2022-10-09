<script setup lang="ts">
import { ref } from 'vue';

import { SEARCH_IDLE_TIME } from '@/common/constants';

import { useGlobalStore } from '@/stores/global';
import { useScrollStore } from '@/stores/scroll';

import * as styles from './search-box.css';

const globalStore = useGlobalStore();
const scrollStore = useScrollStore();

function elevationColor(reversed = false) {
    return reversed ? (scrollStore.getIsScolled() ? 'surface' : 'surface-4') : scrollStore.getIsScolled() ? 'surface-4' : 'surface';
}

const timeout = ref<number>(0);
const searchValue = ref<string>('');
const isFocused = ref<boolean>(false);

function search() {
    clearTimeout(timeout.value);
    timeout.value = setTimeout(() => {
        globalStore.searchQuery = searchValue.value;
    }, SEARCH_IDLE_TIME);
}

function clearSearch() {
    searchValue.value = '';
    globalStore.clearSearch();
}
</script>

<template>
    <VToolbar
        :style="styles.toolbar"
        v-if="globalStore.showSearch"
        :color="elevationColor(true)"
        height="52"
        class="rounded-pill px-2">
        <div :style="styles.actionContainer">
            <VBtn
                icon
                color="on-surface">
                <VIcon icon="search" />
                <VTooltip
                    :open-delay="450"
                    text="Search"
                    activator="parent"
                    location="bottom" />
            </VBtn>
        </div>
        <VTextField
            @focusin="isFocused = true"
            @focusout="isFocused = false"
            @keyup="search"
            v-model="searchValue"
            bgColor="transparent"
            variant="solo"
            hide-details
            single-line
            label="Search Items"
            class="px-0" />
        <div :style="styles.actionContainer">
            <VBtn
                v-if="searchValue != ''"
                icon
                @click="clearSearch()"
                color="on-surface">
                <VIcon icon="clear" />
                <VTooltip
                    :open-delay="450"
                    text="Clear"
                    activator="parent"
                    location="bottom" />
            </VBtn>
        </div>
    </VToolbar>
</template>
