<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useGlobalStore } from '@/stores/global';

import MessageBanner from '@/components/banners/message-banner/MessageBanner.vue';
import { useLocale } from 'vuetify/lib/framework.mjs';

const globalStore = useGlobalStore();
const router = useRouter();
const { t } = useLocale();

function goHome(): void {
    router.push('/');
}
</script>

<template>
    <MessageBanner
        v-if="globalStore.pageState.isUnderBuilding"
        :title="t('$vuetify.pages.underConstruction.title')"
        :message="t('$vuetify.pages.underConstruction.subtitle')">
        <div>
            <VBtn
                @click="goHome()"
                append-icon="arrow_right_alt"
                class="mx-1">
                {{ t('$vuetify.pages.underConstruction.action.goHome') }}
            </VBtn>
        </div>
    </MessageBanner>
</template>
