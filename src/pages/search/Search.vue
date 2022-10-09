<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';

const globalStore = useGlobalStore();
</script>

<template>
    <div>
        <div class="text-h4">{{ `Value: '${globalStore.searchQuery}'` }}</div>
    </div>
</template>
