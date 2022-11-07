import { CSSProperties } from 'vue';

const TRANSITION_TIMING_MS = '200ms';

const CUBIC_BEZIER = 'cubic-bezier(0, 0, 0.2, 1)';

export const bgColorTransition: CSSProperties = {
    transition: `background-color ${TRANSITION_TIMING_MS} ${CUBIC_BEZIER}`
};

export const allTransition: CSSProperties = {
    transition: `all ${TRANSITION_TIMING_MS} ${CUBIC_BEZIER}`
};

export const borderRadiusTransition: CSSProperties = {
    transition: `border-radius ${TRANSITION_TIMING_MS} ${CUBIC_BEZIER}`
};

export const transitionOptCalc = () => {
    return `${TRANSITION_TIMING_MS} ${CUBIC_BEZIER}`;
};
