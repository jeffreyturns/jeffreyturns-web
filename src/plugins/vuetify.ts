import 'vuetify/styles';
import '@/styles/variables.scss';

import { createVuetify } from 'vuetify';

// prettier-ignore
import {
    locale,
    components,
    iconset,
    theme
} from '@/common/config';

import { aliases } from '@/common/components-config';

export default createVuetify({
    locale: locale,
    aliases: aliases,
    defaults: components,
    icons: iconset,
    theme: theme
});
