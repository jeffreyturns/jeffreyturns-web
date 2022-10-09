import { useSnackStore } from '@/stores/snack';

import { Snack } from '@/stores/snack';

export const useSnack = () => {
    const snackStore = useSnackStore();

    function snack(_snack: Snack): void {
        snackStore.show(_snack);
    }

    function dismiss(): void {
        snackStore.dismiss();
    }

    return {
        snack,
        dismiss
    };
};
