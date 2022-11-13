import { useLocale } from 'vuetify/lib/framework.mjs';

export function useLocalizeTranslate(pageName: string = '') {
    function t(path: string): string {
        const { t } = useLocale();

        const pagePath: string = pageName == '' ? `$vuetify.${path}` : `$vuetify.pages.${pageName}.${path}`;

        return t(pagePath);
    }

    return {
        t
    };
}
