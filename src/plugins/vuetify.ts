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

export default createVuetify({
    locale: locale,
    defaults: components,
    icons: iconset,
    theme: theme
});
