<script setup lang="ts">
import { ref, watch } from 'vue';

import { SnackAction, useSnackStore } from '@/stores/snack';

import { SNACKBAR_DEFAULT_DURATION_MS } from '@/stores/snack';
import { useLocale } from 'vuetify/lib/framework.mjs';

const snackStore = useSnackStore();

const message = ref<string>(snackStore.snack?.message ?? 'Snackbar');
const action = ref<SnackAction | boolean>(snackStore.snack?.action ?? false);
const actionTitle = ref<string>(typeof action.value != 'boolean' ? action.value.title ?? 'Cancel' : '');

const { t } = useLocale();

function calcDuration(): number {
    switch (typeof snackStore.snack?.duration) {
        case 'boolean': {
            return snackStore.snack?.duration === false ? -1 : SNACKBAR_DEFAULT_DURATION_MS;
        }
        case 'undefined': {
            return SNACKBAR_DEFAULT_DURATION_MS;
        }
        case 'number': {
            return snackStore.snack?.duration;
        }
        default: {
            return SNACKBAR_DEFAULT_DURATION_MS;
        }
    }
}

function invokeAction(): void {
    typeof action.value != 'boolean' ? action.value.action?.() : '';
    snackStore.dismiss();
}

watch(
    () => snackStore.isShow,
    () => {
        message.value = snackStore.snack?.message ?? 'SnackBar';
        action.value = snackStore.snack?.action as SnackAction;
        actionTitle.value = typeof action.value != 'boolean' ? action?.value?.title ?? 'Cancel' : '';
    },
    { immediate: true }
);
</script>

<template>
    <VSnackbar
        :timeout="calcDuration()"
        v-model="snackStore.isShow">
        {{ t(message) }}
        <template
            v-slot:actions
            v-if="action">
            <TextBtn
                v-ripple
                color="inverse-primary"
                @click="invokeAction()">
                {{ t(actionTitle) }}
            </TextBtn>
        </template>
    </VSnackbar>
</template>

<style scoped>
@media screen and (max-width: 600px) {
    :deep(.v-overlay__content) {
        margin-bottom: 80px !important;
    }
}
</style>
