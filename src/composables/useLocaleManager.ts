import { PREF_LANG } from '@/common/constants';

export enum Language {
    EN = 'en',
    UA = 'ua'
}

export const LANGUAGE_VALUES = [
    {
        title: 'English',
        value: Language.EN
    },
    {
        title: 'Українська',
        value: Language.UA
    }
];

export const useLocaleManager = (): string => {
    const currentLanguage = getPreferenceLocale();

    const computeLang = (): Language => {
        switch (currentLanguage) {
            case 'en': {
                return Language.EN;
            }
            case 'ua': {
                return Language.UA;
            }
            default: {
                return Language.EN;
            }
        }
    };
    return computeLang();
};

const getPreferenceLocale = (): string => {
    return localStorage.getItem(PREF_LANG) || defaultLocale();
};

const defaultLocale = (): string => {
    localStorage.setItem(PREF_LANG, Language.EN);
    return Language.EN;
};

export const changeLocale = (value: Language): void => {
    localStorage.setItem(PREF_LANG, value);
};
