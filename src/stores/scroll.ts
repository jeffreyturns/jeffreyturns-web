import { ref } from 'vue';

import { defineStore } from 'pinia';

export const useScrollStore = defineStore('scroll', () => {
    const isScrolled = ref(false);
    const isTopFABVisible = ref(false);

    function getIsScolled(): boolean {
        return isScrolled.value;
    }

    function setIsScrolled(value: boolean): void {
        isScrolled.value = value;
    }

    function getIsTopFABVisible(): boolean {
        return isTopFABVisible.value;
    }

    function setIsTopFABVisible(value: boolean): void {
        isTopFABVisible.value = value;
    }

    return { getIsScolled, setIsScrolled, getIsTopFABVisible, setIsTopFABVisible };
});
