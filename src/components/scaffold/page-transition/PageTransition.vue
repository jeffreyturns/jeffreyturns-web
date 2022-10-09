<script setup lang="ts">
import { Component } from 'vue';

import { useRoute } from 'vue-router';

interface PageTransitionProps {
    routerDefinedTransition?: boolean;
    defaultRouterPageTransition?: string;
    componentSlot: Component;
}

const props = withDefaults(defineProps<PageTransitionProps>(), {
    routerDefinedTransition: true,
    defaultRouterPageTransition: 'scroll-y-transition'
});

const route = useRoute();

function transitionName(): string {
    if (!props.routerDefinedTransition) {
        return 'fade-transition';
    }
    return (route.meta.transition as string) || props.defaultRouterPageTransition;
}
</script>

<template>
    <Transition
        :name="transitionName()"
        mode="out-in">
        <component :is="props.componentSlot" />
    </Transition>
</template>
