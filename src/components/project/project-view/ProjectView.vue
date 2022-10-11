<script setup lang="ts">
import { Project } from '@/stores/project';

interface ProjectViewProps {
    entry?: Project;
}

const props = withDefaults(defineProps<ProjectViewProps>(), {
    entry: undefined
});
</script>

<template>
    <div>
        {{ props.entry }}
        <VCard height="300px">
            <VImg
                :aspect-ratio="0.1"
                cover
                :src="`https://raw.githubusercontent.com/Jeffrey01596/jeffreyturns/main/static/${entry?.header}`" />
        </VCard>
    </div>
</template>
