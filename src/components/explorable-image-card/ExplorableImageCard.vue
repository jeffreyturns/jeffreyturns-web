<script setup lang="ts">
import { useLocale } from 'vuetify/lib/framework.mjs';
import Interact from '@/components/interact/Interact.vue';

interface EntryProps {
    isPaint: boolean;
    image: {
        title: string;
        url: string;
    };
    button?: {
        title: string;
        url: string;
        isRouterPath: boolean;
    };
}

interface ExplorableImageCardProps {
    entry?: EntryProps;
}

const { t } = useLocale();

const compProps = defineProps<ExplorableImageCardProps>();
</script>

<template>
    <VHover v-slot="{ isHovering, props }">
        <VCard
            v-bind="props"
            :rounded="isHovering ? 'sm' : 'elg'"
            :height="250"
            class="mx-1 border-radius-transition">
            <VImg
                cover
                :lazy-src="require('@/assets/placeholder.svg')"
                :gradient="isHovering ? 'to bottom, rgba(0,0,0,.20), rgba(0,0,0,.45)' : ''"
                :aspect-ratio="0.1"
                :src="compProps.entry?.image.url">
                <VCard
                    class="d-flex align-center justify-center"
                    color="transparent"
                    height="250px">
                    <VFadeTransition>
                        <div
                            v-if="isHovering"
                            class="text-center">
                            <div class="text-white text-subtitle-1 mb-3 font-weight-medium">
                                {{ compProps.entry?.isPaint ? `"${compProps.entry?.image.title}"` : compProps.entry?.image.title }}
                            </div>
                            <Interact
                                v-if="entry?.button"
                                v-slot="{ isInteracted }"
                                :is-inline-box-container="true">
                                <FilledBtn
                                    v-if="compProps.entry?.button != null"
                                    color="white"
                                    :rounded="isInteracted ? 'sm' : 'elg'"
                                    class="border-radius-transition"
                                    :to="compProps.entry?.button.isRouterPath ? compProps.entry?.button.url : undefined"
                                    :href="!compProps.entry?.button.isRouterPath ? compProps.entry?.button.url : undefined">
                                    {{ t(compProps.entry?.button.title) }}
                                </FilledBtn>
                            </Interact>
                        </div>
                    </VFadeTransition>
                </VCard>
            </VImg>
        </VCard>
    </VHover>
</template>
