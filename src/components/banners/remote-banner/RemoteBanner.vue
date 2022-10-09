<script setup lang="ts">
import { ref } from 'vue';

export type BannerStateType = 'info' | 'warning' | 'success' | 'error';

export type BannerType = 'bold' | 'normal';

interface RemoteBannerProps {
    state: BannerStateType;
    type: BannerType;
    text: string;
    dismissible: boolean;
}

const model = ref(true);

const props = withDefaults(defineProps<RemoteBannerProps>(), {
    state: 'info',
    type: 'normal',
    text: 'Placeholder',
    dismissible: true
});
</script>

<template>
    <VAlert
        v-model="model"
        :color="`state-${props.state}${props.type != 'bold' ? '-container' : ''}`"
        class="my-2">
        <div
            class="d-flex flex-row align-center justify-space-between text-body-1"
            :class="`text-state-on-${props.state}${props.type != 'bold' ? '-container' : ''}`">
            <div v-text="props.text" />
            <VBtn
                v-if="props.dismissible"
                height="40"
                width="40"
                variant="text"
                :color="`state-on-${props.state}${props.type != 'bold' ? '-container' : ''}`"
                icon="close" />
        </div>
    </VAlert>
</template>
