import { Theme } from '@/composables/useThemeManager';

export const TITLE_PREFIX_APPENDED = ' • Jeffrey Turns';

export const BASE_API_URL = 'https://jeffreyturns-api.vercel.app/api';

export const THEME_SEED = '#ffd0a3'; //#7a564a 56633e 465e91 6e5d03 616200

export const SEARCH_IDLE_TIME = 1000;

export const PREF_THEME = 'theme';
export const PREF_LANG = 'language';

export const NAVIGATION_ITEMS = [
    { text: 'Home', icon: 'home', to: '/' },
    { text: 'About', icon: 'article', to: '/about' },
    { text: 'Projects', icon: 'history_edu', to: '/projects' },
    { text: 'Policy', icon: 'lock_person', to: '/policy' },
    { text: 'Contact', icon: 'mail', to: '/mail' }
];

export const THEME_VALUES = [
    {
        title: 'Auto',
        value: Theme.AUTO
    },
    {
        title: 'Light',
        value: Theme.LIGHT
    },
    {
        title: 'Dark',
        value: Theme.DARK
    }
];
