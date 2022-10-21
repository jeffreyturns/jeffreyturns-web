import { ref } from 'vue';

import { defineStore } from 'pinia';

export interface ComplexErrorMessage {
    error: number;
    errorBody: string;
}

export interface PageState {
    isLoading: boolean;
    isError: boolean;
    isUnderBuilding: boolean;
}

export const NAVIGATION_ITEMS = [
    { pathName: 'home', icon: 'home', to: '/' },
    { pathName: 'about', icon: 'article', to: '/about' },
    { pathName: 'projects', icon: 'history_edu', to: '/projects' },
    { pathName: 'privacyPolicy', icon: 'lock_person', to: '/privacy-policy' }
];

export const useGlobalStore = defineStore('global', () => {
    // define vars
    const isNotFoundPage = ref(false);
    const pageState = ref<PageState>({
        isError: false,
        isLoading: false,
        isUnderBuilding: false
    });
    const complexError = ref<ComplexErrorMessage>({
        error: 418,
        errorBody: " I'm a teapot"
    });
    const showSearch = ref(false);
    const searchQuery = ref('');

    const rail = ref(true);

    // define functions
    function resetStates(): void {
        pageState.value.isLoading = false;
        pageState.value.isError = false;
    }

    function updatePageState(_state: PageState): void {
        pageState.value = _state;
    }

    function clearSearch() {
        searchQuery.value = '';
    }

    // prettier-ignore
    return {
        isNotFoundPage,
        showSearch,
        clearSearch,
        searchQuery,
        rail,
        pageState,
        resetStates,
        updatePageState,
        complexError
    };
});
