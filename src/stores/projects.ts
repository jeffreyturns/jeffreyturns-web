import { ref } from 'vue';

import { defineStore } from 'pinia';
import { getProjects } from '@/api/reqests';

type Path = string;

export interface Projects {
    title: string;
    description: string;
    isFavorite: boolean;
    preview: Path;
    project: string;
    tags: string[];
}

interface ProjectState {
    projects: Projects[];
}

export const useProjectsStore = defineStore('projects', () => {
    const state = ref<ProjectState>({
        projects: []
    });

    function clear(): void {
        state.value.projects = [];
    }

    function list(): Projects[] {
        return state.value.projects;
    }

    function isLoaded(): boolean {
        return Array.isArray(state.value.projects) && state.value.projects.length > 0;
    }

    async function fetch(): Promise<void> {
        if (isLoaded()) return;

        const data = await getProjects();
        state.value.projects = data;
    }

    return { state, clear, list, isLoaded, fetch };
});
