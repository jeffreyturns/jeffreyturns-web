<script setup lang="ts">
export interface TextColumn {
    title?: string;
    text?: string;
}

const items: Array<TextColumn> = [
    {
        title: '',
        text: 'I take the protection of your data very seriously and comply with applicable laws and regulations. In the following, I will give you an overview of what data is processed for what purpose and what happens to your personal data when you visit my website or use my published apps. Personal data (hereafter often referred to as just “data”) is any data with which you can be personally identified.'
    },
    {
        title: 'Collected data',
        text: 'I do not collect any data on this website. It does not use cookies, tracking or analytics services. The creation of server log files is also completely disabled, so I can never see the IP addresses of visitors to this website.'
    },
    {
        title: 'Contact',
        text: 'If you contact me, whether through this website or in one of my apps, you agree that your data will be stored for the purpose of processing your request and for any further correspondence. If there is no reason for me to further store your data or if you exercise your right of revocation, your data will be deleted. Your data will never be passed on to third parties.'
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
            v-text="`Privacy Policy`" />
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
