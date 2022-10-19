<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';

import * as styles from './indeterminate-loader.css';

interface IndeterminateLoaderProps {
    isRounded?: boolean;
    indicatorColor?: string;
}

const props = withDefaults(defineProps<IndeterminateLoaderProps>(), {
    isRounded: false,
    indicatorColor: 'primary'
});

const globalStore = useGlobalStore();
</script>

<template>
    <VProgressLinear
        :rounded="props.isRounded"
        :active="globalStore.pageState.isLoading"
        indeterminate
        :style="styles.loaderPosition"
        bg-color="surface-variant"
        :color="props.indicatorColor" />
</template>
