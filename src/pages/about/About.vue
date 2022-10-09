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
    },
    {
        title: '',
        text: 'As far as the content on this page was not created by me, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform me so that I can remove such content immediately upon becoming aware of the infringement.'
    },
    {
        title: 'Lorem',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptas cum excepturi, vero eum suscipit dolor voluptatum quas deleniti libero delectus sapiente possimus minus quis impedit officiis culpa recusandae distinctio.'
    },
    {
        title: 'Lorem',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptas cum excepturi, vero eum suscipit dolor voluptatum quas deleniti libero delectus sapiente possimus minus quis impedit officiis culpa recusandae distinctio.'
    },
    {
        title: 'Lorem',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptas cum excepturi, vero eum suscipit dolor voluptatum quas deleniti libero delectus sapiente possimus minus quis impedit officiis culpa recusandae distinctio.'
    },
    {
        title: 'Lorem',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptas cum excepturi, vero eum suscipit dolor voluptatum quas deleniti libero delectus sapiente possimus minus quis impedit officiis culpa recusandae distinctio.'
    }
];
</script>

<template>
    <VContainer>
        <div
            class="pt-2 pb-4 text-h2 text-center text-high-emphasis font-weight-medium"
            v-text="`About`" />
        <VCard
            class="ma-2"
            color="transparent"
            max-width="1120px"
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
    </VContainer>
</template>
