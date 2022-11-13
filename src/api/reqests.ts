import { request } from './base';

import { ProjectPreview } from '@/stores/favorites';
import { Project } from '@/stores/project';
import { Projects } from '@/stores/projects';

export const getFavorites = () =>
    request<ProjectPreview[]>({
        path: '/projects?favorite=true',
        method: 'GET'
    });

export const getProject = (name: string) =>
    request<Project>({
        path: `/project?name=${name}`,
        method: 'GET'
    });

export const getProjects = () =>
    request<Projects[]>({
        path: '/projects',
        method: 'GET'
    });
