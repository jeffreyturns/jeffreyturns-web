import { CSSProperties } from 'vue';

const TRANSITION_TIMING_MS = 200;

export const bgColorTransition: CSSProperties = {
    transition: `background-color .${TRANSITION_TIMING_MS}s ease`
};

export const allTransition: CSSProperties = {
    transition: `all .${TRANSITION_TIMING_MS}s ease`
};

export const borderRadiusTransition: CSSProperties = {
    transition: `border-radius .${TRANSITION_TIMING_MS}s ease`
};

export const transitionOptCalc = () => {
    return `.${TRANSITION_TIMING_MS}s ease`;
};
