<script setup lang="ts">
import { computed, onMounted, ref, VNode } from 'vue';
import { useRouter } from 'vue-router';

interface PageTransitionProps {
    routerDefinedTransition?: boolean;
    defaultRouterPageTransition?: string;
    componentNode: VNode;
}

const props = withDefaults(defineProps<PageTransitionProps>(), {
    routerDefinedTransition: true,
    defaultRouterPageTransition: 'slide-y'
});

const router = useRouter();
const _transition = ref<string>('');

onMounted(() => {
    router.beforeEach((to, from, next) => {
        const isSameTransition = to.meta.transition != from.meta.transition;
        // undefined is default slide-y transition? som this is normal
        const isSlideXTransitionBack = to.meta.transition === undefined && from.meta.transition == 'slide-x';
        console.log(`to: ${to.meta.transition} :: from: ${from.meta.transition}`);
        _transition.value = isSlideXTransitionBack ? 'slide-x-reverse' : isSameTransition ? 'slide-x' : 'slide-y';

        next();
    });
});

const transition = computed((): string => {
    if (!props.routerDefinedTransition) {
        return 'slide-x';
    }

    return _transition.value || props.defaultRouterPageTransition;
});
</script>

<template>
    <Transition
        :name="transition"
        mode="out-in">
        <Component :is="props.componentNode" />
    </Transition>
</template>

<style lang="scss">
@import './_slide-anim.scss';
</style>
