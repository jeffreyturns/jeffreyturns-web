import { ref } from 'vue';

import { defineStore } from 'pinia';
import { httpJson } from '@/api/base';

type Path = string;

export interface Project {
    title: string;
    description: string;
    isFavorite: boolean;
    preview: Path;
    project: string;
    tags: string[];
}

interface ProjectState {
    project: Project[];
}

export const useProjectsStore = defineStore('projects', () => {
    const state = ref<ProjectState>({
        project: []
    });

    function clear(): void {
        state.value.project = [];
    }

    function list(): Project[] {
        return state.value.project;
    }

    function isLoaded(): boolean {
        return Array.isArray(state.value.project) && state.value.project.length > 0;
    }

    async function fetch(): Promise<void> {
        if (isLoaded()) return;

        const data = await httpJson<Project[]>(`/projects`);
        state.value.project = data;
    }

    return { state, clear, list, isLoaded, fetch };
});
