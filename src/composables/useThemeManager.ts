import { PREF_THEME } from '@/common/constants';

import { ThemeInstance } from 'vuetify/lib/framework.mjs';

export enum Theme {
    AUTO = 'auto',
    LIGHT = 'light',
    DARK = 'dark'
}

export const useThemeManager = (instance: ThemeInstance): void => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

    const overrideTheme = () => {
        setPrefTheme(Theme.AUTO);
        return Theme.AUTO;
    };

    const themeConfiguration = localStorage.getItem(PREF_THEME) || overrideTheme();

    const applyTheme = () => {
        switch (themeConfiguration) {
            case Theme.AUTO: {
                instance.global.name.value = matchMedia.matches ? 'dark' : 'light';
                break;
            }
            case Theme.LIGHT: {
                instance.global.name.value = 'light';
                break;
            }
            case Theme.DARK: {
                instance.global.name.value = 'dark';
                break;
            }
        }
    };

    applyTheme();

    matchMedia.addEventListener('change', applyTheme);
};

export const getPrefTheme = (): string => localStorage.getItem(PREF_THEME) || 'auto';

export const setPrefTheme = (theme: Theme): void => {
    localStorage.setItem(PREF_THEME, theme);
};

export const toThemeEnums = (value: string): Theme => {
    switch (value) {
        case 'auto': {
            return Theme.AUTO;
        }
        case 'light': {
            return Theme.LIGHT;
        }
        case 'dark': {
            return Theme.DARK;
        }
        default: {
            return Theme.AUTO;
        }
    }
};
