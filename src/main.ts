import { createApp } from 'vue';

import App from '@/pages/app/App.vue';

import router from '@/router';

import vuetify from '@/plugins/vuetify';
import loadFonts from '@/plugins/webfontloader';
import pinia from '@/plugins/pinia';

loadFonts();

// prettier-ignore
createApp(App)
    .use(router)
    .use(vuetify)
    .use(pinia)
    .mount('#app');
