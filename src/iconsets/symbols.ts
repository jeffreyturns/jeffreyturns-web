import { h } from 'vue';
import { VLigatureIcon } from 'vuetify/lib/components';

import { IconAliases, IconSet } from 'vuetify/lib/framework.mjs';

export const aliases: IconAliases = {
    collapse: 'keyboard_arrow_up',
    complete: 'check',
    cancel: 'cancel',
    close: 'close',
    delete: 'cancel',
    clear: 'cancel',
    success: 'check_circle',
    info: 'info',
    warning: 'report',
    error: 'error',
    prev: 'chevron_left',
    next: 'chevron_right',
    checkboxOn: 'check_box',
    checkboxOff: 'check_box_outline_blank',
    checkboxIndeterminate: 'indeterminate_check_box',
    delimiter: 'fiber_manual_record',
    sort: 'sort',
    expand: 'keyboard_arrow_down',
    menu: 'menu',
    subgroup: 'arrow_drop_down',
    dropdown: 'arrow_drop_down',
    radioOn: 'radio_button_checked',
    radioOff: 'radio_button_unchecked',
    edit: 'edit',
    ratingEmpty: 'star_border',
    ratingFull: 'star',
    ratingHalf: 'star_half',
    loading: 'cached',
    first: 'first_page',
    last: 'last_page',
    unfold: 'unfold_more',
    file: 'attach_file',
    plus: 'add',
    minus: 'remove',
    sortAsc: 'arrow_upward',
    sortDesc: 'arrow_downward'
};

export const symbol: IconSet = {
    component: props => h(VLigatureIcon, { ...props, class: 'material-symbols-rounded' })
};
