import en from '@/locales/en';
import ua from '@/locales/ua';

import { aliases as alias, symbol } from '@/iconsets/symbols';

import { themeFromSeed } from '@/core/theme/app-schemes';
import { THEME_SEED } from '@/common/constants';

import { aliasComponents } from './components-config';

const generatedTheme = themeFromSeed(THEME_SEED);

export const components = {
    ...aliasComponents,
    VAppBar: {
        flat: true,
        color: 'surface-2'
    },
    VAutocomplete: {
        variant: 'filled'
    },
    VBanner: {
        color: 'primary'
    },
    VBtn: {
        rounded: 'xl',
        elevation: '0'
    },
    VCard: {
        flat: true,
        rounded: 'lg',
        color: 'surface-1',
        VCardActions: {
            VBtn: {
                variant: 'flat'
            }
        }
    },
    VCheckbox: {
        color: 'secondary'
    },
    VChip: {
        rounded: 'sm'
    },
    VCombobox: {
        variant: 'filled'
    },
    VNavigationDrawer: {
        VList: {
            nav: true,
            VListItem: {
                rounded: 'pill',
                height: '56'
            }
        }
    },
    VSelect: {
        variant: 'filled'
    },
    VSlider: {
        color: 'primary'
    },
    VTabs: {
        color: 'primary'
    },
    VTextarea: {
        variant: 'filled'
    },
    VTextField: {
        variant: 'filled',
        color: 'primary'
    },
    VImg: {
        rounded: 'lg'
    },
    VAlert: {
        rounded: 'lg'
    },
    VDialog: {
        VCard: {
            color: 'surface-3',
            rounded: 'xl'
        }
    },
    // FIXME: Not working after vuetify beta 10 >
    // VMenu: {
    //     VList: {
    //         elevation: '2',
    //         bgColor: 'surface-2',
    //         rounded: 'lg'
    //     },
    // },
    VBottomNavigation: {
        bgColor: 'surface-2',
        height: '80',
        elevation: '0'
    },
    VBtnToggle: {
        VBtn: {
            rounded: '0'
        }
    },
    VSwitch: {
        inset: true,
        color: 'primary'
    },
    VToolbar: {
        color: 'surface-2'
    },
    VTooltip: {
        transition: 'dialog-transition'
    },
    VDivider: {
        color: 'outline'
    }
};

export const locale = {
    defaultLocale: 'en',
    messages: { en, ua }
};

export const iconset = {
    defaultSet: 'symbol',
    alias,
    sets: {
        symbol
    }
};

export const theme = {
    defaultTheme: 'light',
    themes: {
        light: generatedTheme.light,
        dark: generatedTheme.dark
    }
};
