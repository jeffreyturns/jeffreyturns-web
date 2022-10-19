<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useGlobalStore } from '@/stores/global';

import MessageBanner from '@/components/banners/message-banner/MessageBanner.vue';

const globalStore = useGlobalStore();
const router = useRouter();

function goHome(): void {
    router.push('/');
}
</script>

<template>
    <MessageBanner
        v-if="globalStore.pageState.isError"
        title="Something went wrong!"
        message="Refresh the page or try again later.">
        <div>
            <VBtn
                @click="goHome()"
                class="mx-1">
                Go Home
            </VBtn>
            <VBtn class="mx-1 mx-1 bg-secondary-container text-on-secondary-container">View Log</VBtn>
        </div>
    </MessageBanner>
</template>
