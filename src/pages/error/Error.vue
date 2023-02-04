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
            <FilledBtn
                @click="goHome()"
                class="mx-1">
                Go Home
            </FilledBtn>
            <OutlinedBtn class="mx-1 mx-1">View Log</OutlinedBtn>
        </div>
    </MessageBanner>
</template>
