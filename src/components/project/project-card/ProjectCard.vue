<script setup lang="ts">
import { ProjectPreview } from '@/stores/favorites';

import Interact from '@/components/interact/Interact.vue';

interface ProjectCardProps {
    entry: ProjectPreview;
}

const compProps = withDefaults(defineProps<ProjectCardProps>(), {
    entry: undefined
});

function cropDesc(text: string): string {
    return text.length > 80 ? `${text.substring(0, 80)}...` : text;
}

function chipColor(title: string) {
    switch (title.toLowerCase()) {
        case 'android': {
            return 'state-info';
        }
        case 'web': {
            return 'state-warning';
        }
        case 'design': {
            return 'state-error';
        }
        default: {
            return 'primary';
        }
    }
}
</script>

<template>
    <VHover v-slot="{ isHovering, props }">
        <Interact
            v-slot="{ isInteracted }"
            class="ma-1">
            <FilledCard
                :to="`/project/${compProps.entry.project}`"
                v-bind="props"
                v-ripple
                :rounded="isInteracted ? 'elg' : 'lg'"
                :color="isHovering ? 'secondary-container' : 'surface-2'"
                class="universal-transition"
                width="400px"
                height="360px">
                <VImg
                    gradient="to bottom, rgba(0,0,0,.009), rgba(0,0,0,.2)"
                    class="universal-transition"
                    :aspect-ratio="2 / 1"
                    cover
                    :class="[isHovering ? 'setScale' : 'resetScale', isInteracted ? 'rounded-elg' : 'rounded-lg']"
                    :lazy-src="require('@/assets/placeholder.svg')"
                    :src="`https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/${compProps.entry.preview}`" />
                <VCardItem>
                    <VCardTitle
                        :class="isHovering ? 'text-on-secondary-container' : 'text-on-surface-2'"
                        class="font-weight-medium"
                        v-text="compProps.entry.title" />
                </VCardItem>

                <VCardText
                    :class="isHovering ? 'text-on-secondary-container' : 'text-on-surface-2'"
                    class="desc"
                    v-text="cropDesc(compProps.entry.description)" />
                <VCardActions>
                    <VChip
                        class="mx-1 px-2 font-weight-medium"
                        :class="[`text-on-${chipColor(it)}-container`, `bg-${chipColor(it)}-container`]"
                        v-for="(it, i) in compProps.entry.tags"
                        :key="i"
                        variant="tonal"
                        label>
                        {{ it }}
                    </VChip>
                </VCardActions>
            </FilledCard>
        </Interact>
    </VHover>
</template>

<style>
.setScale > .v-img__img--cover {
    transform: scale(1.1);
    transition: transform 400ms ease;
}
.resetScale > .v-img__img--cover {
    transform: scale(1);
    transition: transform 400ms ease;
}
.desc {
    min-height: 56px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
