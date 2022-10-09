<script setup lang="ts">
import RailLogo from '@/components/scaffold/navigation-rail/rail-logo/RailLogo.vue';

const links = ['GitHub', 'Twitter', 'Spotify', 'ArtStation', 'Dribbble', 'Mail'];

const currentYear = () => new Date().getFullYear();
</script>

<template>
    <VFooter class="bg-surface-4 rounded-xl ma-4">
        <VRow
            justify="center"
            align="center"
            no-gutters>
            <RailLogo />
            <VCol
                :cols="12"
                class="text-center">
                <VBtn
                    v-for="it in links"
                    :key="it"
                    variant="text"
                    class="mx-2"
                    rounded="xl">
                    {{ it }}
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
</template>
