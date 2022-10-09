import { ref } from 'vue';

import { defineStore } from 'pinia';

export const useScrollStore = defineStore('scroll', () => {
    const isScrolled = ref(false);

    function getIsScolled(): boolean {
        return isScrolled.value;
    }

    function setIsScrolled(value: boolean): void {
        isScrolled.value = value;
    }

    return { getIsScolled, setIsScrolled };
});
