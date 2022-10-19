<script setup lang="ts">
import { computed, VNode } from 'vue';
import { useRoute } from 'vue-router';

interface PageTransitionProps {
    routerDefinedTransition?: boolean;
    defaultRouterPageTransition?: string;
    componentNode: VNode;
}

const props = withDefaults(defineProps<PageTransitionProps>(), {
    routerDefinedTransition: true,
    defaultRouterPageTransition: 'scroll-y-transition'
});

const route = useRoute();

const transition = computed((): string => {
    if (!props.routerDefinedTransition) {
        return 'fade-transition';
    }
    return (route.meta.transition as string) || props.defaultRouterPageTransition;
});
</script>

<template>
    <Transition
        :name="transition"
        mode="out-in">
        <Component :is="props.componentNode" />
    </Transition>
</template>
