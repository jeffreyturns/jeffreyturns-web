import { ref } from 'vue';

import { defineStore } from 'pinia';
import { getFavorites } from '@/api/reqests';

export type Path = string;

export interface ProjectPreview {
    title: string;
    description: string;
    preview: Path;
    project: string;
    tags: Array<string>;
}

interface FavoriteState {
    items: ProjectPreview[];
}

export const useFavoritesStore = defineStore('favorites', () => {
    const state = ref<FavoriteState>({
        items: []
    });

    function list(): ProjectPreview[] {
        return state.value.items;
    }

    function isLoaded(): boolean {
        return state.value.items.length > 0;
    }

    async function fetchData() {
        if (isLoaded()) return;

        const data = await getFavorites();
        state.value.items = data;
    }

    return { state, list, isLoaded, fetchData };
});
