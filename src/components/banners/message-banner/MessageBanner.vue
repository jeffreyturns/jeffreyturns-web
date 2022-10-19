<script setup lang="ts">
import FullHeightContainer from '@/components/full-height-container/FullHeightContainer.vue';

import * as styles from './message-banner.css';

interface MessageBannerProps {
    title: string;
    message?: string;
}

const props = withDefaults(defineProps<MessageBannerProps>(), {
    title: 'Placeholder',
    message: undefined
});
</script>

<template>
    <FullHeightContainer>
        <VRow
            :style="styles.fullHeightContainer"
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
                    v-if="props.message != undefined"
                    class="pt-2 mx-12 text-h6 text-center text-medium-emphasis"
                    v-text="props.message" />
                <div class="d-flex justify-space-around py-8">
                    <slot />
                </div>
            </VCol>
        </VRow>
    </FullHeightContainer>
</template>
