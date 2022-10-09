<script setup lang="ts">
import { CSSProperties } from 'vue';
import { useGlobalStore } from '@/stores/global';

interface IndeterminateLoaderProps {
    isRounded?: boolean;
    indicatorColor?: string;
}

const props = withDefaults(defineProps<IndeterminateLoaderProps>(), {
    isRounded: false,
    indicatorColor: 'primary'
});

const loader: CSSProperties = {
    position: 'absolute',
    bottom: '0px'
};

const globalStore = useGlobalStore();
</script>

<template>
    <VProgressLinear
        :rounded="props.isRounded"
        :active="globalStore.pageState.isLoading"
        indeterminate
        :style="loader"
        bg-color="surface-variant"
        :color="props.indicatorColor" />
</template>
