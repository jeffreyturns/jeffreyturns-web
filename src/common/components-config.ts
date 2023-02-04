import { VCard } from 'vuetify/lib/components';
import { VBtn } from 'vuetify/lib/components';

export const menu = {
    VList: {
        elevation: '2',
        bgColor: 'surface-2',
        rounded: 'sm'
    }
};

export const aliases = {
    // Buttons
    ElevatedBtn: VBtn,
    FilledBtn: VBtn,
    TonalBtn: VBtn,
    OutlinedBtn: VBtn,
    TextBtn: VBtn,
    FABBtn: VBtn,
    FilledIconBtn: VBtn,
    FilledTonalIconBtn: VBtn,
    OutlinedIconBtn: VBtn,
    TextIconBtn: VBtn,
    // Cards
    ElevatedCard: VCard,
    FilledCard: VCard,
    OutlinedCard: VCard
};

export const baseComponents = {
    BaseBtn: {
        rounded: 'xl'
    },
    BaseFABBtn: {
        rounded: 'lg',
        size: 'large',
        elevation: '2'
    },
    BaseIconBtn: {
        elevation: '0'
    },
    BaseCard: {
        flat: true,
        rounded: 'lg',
        color: 'surface-1',
        VCardActions: {
            VBtn: {
                variant: 'flat'
            }
        }
    }
};

export const aliasComponents = {
    // Buttons
    ElevatedBtn: {
        ...baseComponents.BaseBtn,
        variant: 'tonal',
        color: 'primary',
        elevation: '1'
    },
    FilledBtn: {
        ...baseComponents.BaseBtn,
        color: 'primary',
        elevation: '0'
    },
    TonalBtn: {
        ...baseComponents.BaseBtn,
        color: 'secondary-container',
        elevation: '0'
    },
    OutlinedBtn: {
        ...baseComponents.BaseBtn,
        variant: 'outlined',
        color: 'primary',
        elevation: '0'
    },
    TextBtn: {
        ...baseComponents.BaseBtn,
        variant: 'text',
        color: 'primary',
        elevation: '0'
    },
    FABBtn: {
        ...baseComponents.BaseFABBtn,
        color: 'primary-container'
    },
    FilledIconBtn: {
        ...baseComponents.BaseIconBtn,
        icon: 'favorite',
        color: 'primary'
    },
    FilledTonalIconBtn: {
        ...baseComponents.BaseIconBtn,
        icon: 'favorite',
        color: 'secondary-container'
    },
    OutlinedIconBtn: {
        ...baseComponents.BaseIconBtn,
        variant: 'outlined',
        icon: 'favorite',
        color: 'primary'
    },
    TextIconBtn: {
        ...baseComponents.BaseIconBtn,
        variant: 'text',
        icon: 'favorite',
        color: 'primary'
    },
    // Cards
    ElevatedCard: {
        variant: 'tonal',
        color: 'primary',
        elevation: '1'
    },
    FilledCard: {
        ...baseComponents.BaseCard,
        color: 'surface-variant',
        elevation: '0'
    },
    OutlinedCard: {
        ...baseComponents.BaseCard,
        // FIXME: outlined card text is not passing WCAG
        // variant: 'outlined',
        color: 'surface'
    }
};
