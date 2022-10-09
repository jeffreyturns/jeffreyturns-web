<script setup lang="ts">
import { CSSProperties } from 'vue';
import FullHeightContainer from '@/components/full-height-container/FullHeightContainer.vue';

interface MessageBannerProps {
    title: string;
    message?: string;
}

const props = withDefaults(defineProps<MessageBannerProps>(), {
    title: 'Placeholder',
    message: 'Message placeholder'
});

const fullHeight: CSSProperties = {
    height: '100%',
    margin: 'auto'
};
</script>

<template>
    <FullHeightContainer>
        <VRow
            :style="fullHeight"
            class="py-16"
            align="center"
            justify="center">
            <VCol
                cols="12"
                lg="6">
                <div
                    class="pt-2 pb-2 text-h2 text-center text-high-emphasis font-weight-medium"
                    v-text="props.title" />
                <div
                    class="pt-2 mx-12 text-h6 text-center text-medium-emphasis"
                    v-text="props.message" />
                <div class="d-flex justify-space-around py-8">
                    <slot />
                </div>
            </VCol>
        </VRow>
    </FullHeightContainer>
</template>
