import { Vuetify } from 'vue';

export const translate = (vuetify: Vuetify, key: string, ...params: Array<string | number>) => vuetify.locale.getScope().t(`$vuetify.${key}`, ...params);
