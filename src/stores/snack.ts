import { ref } from 'vue';

import { defineStore } from 'pinia';

export interface SnackAction {
    title: string;
    action?: () => void;
}

export interface Snack {
    message: string;
    duration?: false | number;
    action?: false | SnackAction;
}

export const SNACKBAR_DEFAULT_DURATION_MS = 5000;

export const useSnackStore = defineStore('snack', () => {
    const isShow = ref(false);
    const snack = ref<Snack>();

    /** Dismiss active snackbar
     *  @returns {void}
     */
    const dismiss = (): void => {
        isShow.value = false;
    };

    /** assign snackbar data and show snackbar
     *  @param {Snack}  _snack - snackbar interface
     *  @returns {void} show snackbar
     */
    const show = (_snack: Snack): void => {
        snack.value = _snack;
        isShow.value = true;
    };

    return { isShow, show, snack, dismiss };
});
