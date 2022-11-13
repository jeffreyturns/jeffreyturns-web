<script setup lang="ts">
import { ref } from 'vue';

interface InteractProps {
    isInlineBoxContainer?: boolean;
}

const _isInteracted = ref(false);

const props = withDefaults(defineProps<InteractProps>(), {
    isInlineBoxContainer: false
});

function isNotInteracted(): void {
    _isInteracted.value = false;
}

function isInteracted(): void {
    _isInteracted.value = true;
}
</script>

<template>
    <div
        :style="props.isInlineBoxContainer ? 'display: -webkit-inline-box' : ''"
        v-on:touchstart="isInteracted()"
        v-on:touchend="isNotInteracted()"
        v-on:touchmove="isNotInteracted()"
        v-on:touchcancel="isNotInteracted()"
        v-on:mousedown="isInteracted()"
        v-on:mouseup="isNotInteracted()"
        v-on:mouseleave="isNotInteracted()">
        <slot :isInteracted="_isInteracted" />
    </div>
</template>
