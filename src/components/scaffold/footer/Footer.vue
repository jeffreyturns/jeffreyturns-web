<script setup lang="ts">
import RailLogo from '@/components/scaffold/navigation-rail/rail-logo/RailLogo.vue';

export interface FooterItem {
    title: string;
    url: string;
}

const links: Array<FooterItem> = [
    {
        title: 'GitHub',
        url: 'https://github.com/Jeffrey01596'
    },
    {
        title: 'Spotify',
        url: 'https://open.spotify.com/user/0gxofykxiw9soljgwr06gg65f?si=2d4fa4a97db04c7e'
    },
    {
        title: 'Dribbble',
        url: 'https://dribbble.com/jeffreyturns'
    },
    {
        title: 'Mail',
        url: 'mailto:jeffreyturns@protonmail.com'
    }
];

const currentYear = () => new Date().getFullYear();
</script>

<template>
    <div class="d-flex align-center justify-center">
        <VFooter
            class="bg-surface-4 rounded-xl ma-4"
            style="max-width: 1200px">
            <VRow
                justify="center"
                align="center"
                no-gutters>
                <RouterLink to="/">
                    <RailLogo />
                </RouterLink>
                <VCol
                    :cols="12"
                    class="text-center">
                    <VBtn
                        v-for="it in links"
                        :key="it.title"
                        :href="it.url"
                        variant="text"
                        class="mx-2">
                        {{ it.title }}
                    </VBtn>
                </VCol>
                <VDivider class="my-2 mx-16" />
                <VCol
                    class="text-center my-4 font-weight-medium"
                    :cols="12">
                    © {{ currentYear() }} Jeffrey Turns
                </VCol>
            </VRow>
        </VFooter>
    </div>
</template>
