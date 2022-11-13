import { ref } from 'vue';

import { defineStore } from 'pinia';
import { getProject } from '@/api/reqests';

type Path = string;

interface Download {
    title: string;
    url: string;
}

interface Section {
    title?: string;
    description?: string;
    mockup: Path;
}

export interface Project {
    title: string;
    description: string;
    header: Path;
    download: Download[];
    sections: Section[];
}

interface ProjectState {
    project: Project;
}

export const useProjectStore = defineStore('project', () => {
    const state = ref<ProjectState>({
        project: {
            title: 'Placeholder',
            description: 'Placeholder',
            header: 'Placeholder',
            download: [],
            sections: []
        }
    });

    function clear(): void {
        state.value.project = {
            title: 'Placeholder',
            description: 'Placeholder',
            header: 'Placeholder',
            download: [],
            sections: []
        };
    }

    function list(): Project {
        return state.value.project;
    }

    function isLoaded(): boolean {
        return state.value.project.title != 'Placeholder';
    }

    function isProjectByRequest(project: string): boolean {
        return state.value.project.title.toLowerCase() == project;
    }

    function isSameProject(project: string): boolean {
        if (state.value.project.title == 'Placeholder') return false;
        return state.value.project.title?.toLowerCase() === project;
    }

    async function fetch(project: string): Promise<void> {
        if (isSameProject(project)) return;

        const data = await getProject(project);
        state.value.project = data;
    }

    return { state, clear, list, isLoaded, isProjectByRequest, fetch };
});
