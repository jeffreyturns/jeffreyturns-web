<script setup lang="ts">
export interface TextColumn {
    title?: string;
    text?: string;
}

const items: Array<TextColumn> = [
    {
        title: 'Copyright',
        text: 'The copyright can be found at the bottom of each page. Any reproduction, excerpts or commercial use requires prior written permission from me.'
    },
    {
        title: '',
        text: 'Pictures, photos or graphics used in my internet offer are basically protected by copyright. The free use of the images is not allowed.'
    }
];
</script>

<template>
    <VContainer>
        <div
            class="pt-2 pb-4 text-h2 text-center text-high-emphasis font-weight-medium"
            v-text="`About`" />
        <VContainer>
            <VRow
                align="center"
                justify="center">
                <VCol>
                    <VCard
                        class="ma-2"
                        color="transparent"
                        v-for="(it, i) in items"
                        :key="i">
                        <div
                            v-if="it.title != ''"
                            class="text-h5 font-weight-medium mb-2 mt-4"
                            v-text="it.title" />
                        <div
                            v-if="it.text != ''"
                            class="text-body-1 mt-1"
                            v-text="it.text" />
                    </VCard>
                </VCol>
            </VRow>
        </VContainer>
    </VContainer>
</template>
