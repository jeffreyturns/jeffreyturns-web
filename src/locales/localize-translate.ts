import { useLocale } from 'vuetify/lib/framework.mjs';

export function useLocalizeTranslate(pageName: string = '') {
    function t(key: string, ...params: unknown[]): string {
        const { t } = useLocale();

        const pagePath: string = pageName == '' ? `$vuetify.${key}` : `$vuetify.pages.${pageName}.${key}`;

        return t(pagePath, ...params);
    }

    return {
        t
    };
}
