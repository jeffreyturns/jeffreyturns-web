<script setup lang="ts">
import { ref } from 'vue';

export type BannerStateType = 'info' | 'warning' | 'success' | 'error';

export type BannerType = 'bold' | 'normal';

interface BannerProps {
    state: BannerStateType;
    type: BannerType;
    text: string;
    dismissible: boolean;
    isRainbow: boolean;
}

const model = ref(true);

const props = withDefaults(defineProps<BannerProps>(), {
    state: 'info',
    type: 'normal',
    text: 'Placeholder',
    dismissible: true,
    isRainbow: false
});
</script>

<template>
    <VAlert
        v-model="model"
        :class="props.isRainbow ? 'rainbowAlert' : ''"
        :color="props.isRainbow ? `white` : `state-${props.state}${props.type != 'bold' ? '-container' : ''}`"
        class="my-2">
        <div
            class="d-flex flex-row align-center justify-space-between text-body-1"
            :class="props.isRainbow ? 'text-white' : `text-state-on-${props.state}${props.type != 'bold' ? '-container' : ''}`">
            <div
                class="font-weight-medium"
                v-text="props.text" />
            <TextIconBtn
                v-if="props.dismissible"
                height="40"
                width="40"
                :color="props.isRainbow ? `white` : `state-on-${props.state}${props.type != 'bold' ? '-container' : ''}`"
                icon="close" />
        </div>
    </VAlert>
</template>

<style lang="scss" scoped>
.rainbowAlert {
    background-color: #4158d0;
    background: -webkit-linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%); /* Chrome 10-25, Safari 5.1-6 */
    background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
}
</style>
