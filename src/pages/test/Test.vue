<script setup lang="ts">
import { ref } from 'vue';

import { useSnack } from '@/composables/useSnack';
import { useGlobalStore } from '@/stores/global';

const switch1 = ref<boolean>(true);

const test = ref<string>('empty');

const globalStore = useGlobalStore();
const snack = useSnack();

function startLoading() {
    globalStore.pageState.isLoading = true;
    setTimeout(() => {
        globalStore.pageState.isLoading = false;
        snack.snack({
            message: 'Loading ended.',
            action: {
                title: 'Dismiss',
                action: () => {
                    alert('test!');
                    snack.dismiss();
                }
            }
        });
    }, 3000);
}

function testSnack() {
    snack.snack({
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        duration: 1500,
        action: false
    });
}

const iconButton = {
    global: {
        elevation: 10
    },
    VBtn: {
        height: '40',
        width: '40'
    }
};
</script>

<template>
    <div>
        <div class="text-h4">{{ `Value: '${test}'` }}</div>
        <VRow class="ma-2">
            <VBtn class="mx-1">
                {{ `t('decrement')` }}
            </VBtn>
            <VBtn
                variant="outlined"
                class="mx-1">
                {{ `t('increment')` }}
            </VBtn>
            <VBtn class="mx-1 text-on-surface bg-secondary-container">
                {{ `t('decrement')` }}
            </VBtn>
            <VDefaultsProvider :defaults="iconButton">
                <VBtn
                    @click="testSnack()"
                    color="primary text-on-primary"
                    icon="settings"
                    class="mx-1 filled-symbol" />
            </VDefaultsProvider>
            <VBtn
                to="/about"
                elevation="1"
                color="surface"
                class="mx-1 text-primary">
                Test
            </VBtn>
        </VRow>
        <div>
            <VSwitch v-model="switch1"></VSwitch>
        </div>
        <div class="my-2">
            <VBtn
                class="mx-1 text-on-surface bg-secondary-container"
                prepend-icon="thumb_up"
                height="40">
                245
            </VBtn>
            <VBtn
                class="mx-1 text-on-surface bg-secondary-container"
                prepend-icon="thumb_down"
                height="40">
                Не нравится
            </VBtn>
            <VBtn
                class="mx-1 text-on-surface bg-secondary-container"
                prepend-icon="share"
                height="40">
                Поделится
            </VBtn>
            <VBtn
                class="mx-1 text-on-surface bg-secondary-container"
                prepend-icon="download"
                height="40">
                Скачать
            </VBtn>
            <VBtn
                class="mx-1 text-on-surface bg-secondary-container"
                prepend-icon="playlist_add"
                height="40">
                Сохранить
            </VBtn>
            <VBtn
                class="mx-1 text-on-surface bg-secondary-container"
                icon="more_horiz"
                height="40"
                width="40" />
        </div>
        <div class="mb-2">
            <VBtn
                prepend-icon="open_in_new"
                @click="startLoading()"
                :disabled="globalStore.pageState.isLoading">
                Start loading
            </VBtn>
        </div>
    </div>
</template>
