import { RouteRecordRaw } from 'vue-router';

import { TITLE_PREFIX_APPENDED } from '@/common/constants';

export const useAppTitle = (title: string | RouteRecordRaw): void => {
    const previousTitle = document.title;

    const titleFromMeta = (title: RouteRecordRaw) => `${title.meta?.title}`;

    const appendedTitle = (string: string): string => `${string}${TITLE_PREFIX_APPENDED}`;

    const titleValue = (): string => (typeof title === 'string' ? appendedTitle(title) : appendedTitle(titleFromMeta(title)) || 'Not Found');

    const applyTitle = () => {
        if (previousTitle == titleValue()) return;

        document.title = titleValue();
    };

    applyTitle();
};
