<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

import { useGlobalStore } from '@/stores/global';

import MessageBanner from '@/components/banners/message-banner/MessageBanner.vue';
import { useLocale } from 'vuetify/lib/framework.mjs';

const globalStore = useGlobalStore();
const route = useRoute();
const { t } = useLocale();
const router = useRouter();

function goBack(): void {
    route.meta?.isRoot ? null : window.history.length > 2 ? router.go(-1) : router.push('/');
}

function toTop(): void {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function goBackAndTop(): void {
    goBack();
    toTop();
}
</script>

<template>
    <MessageBanner
        v-if="globalStore.isNotFoundPage"
        :title="t('$vuetify.pages.notFound.title')"
        :message="t('$vuetify.pages.notFound.subtitle')">
        <VBtn
            append-icon="arrow_right_alt"
            @click="goBackAndTop()">
            {{ t('$vuetify.pages.notFound.action.goBack') }}
        </VBtn>
    </MessageBanner>
</template>
