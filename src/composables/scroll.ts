import { useScrollStore } from '@/stores/scroll';

const SCROLL_THRESHOLD_HANDLE_HEIGHT = 1;
const SCROLL_TO_TOP_HANDLE_HEIGHT = 100;

export const useScroll = () => {
    const scrollStore = useScrollStore();

    function observe() {
        window.addEventListener('scroll', () => {
            scrollStore.setIsScrolled(window.scrollY > SCROLL_THRESHOLD_HANDLE_HEIGHT);
            scrollStore.setIsTopFABVisible(window.scrollY > SCROLL_TO_TOP_HANDLE_HEIGHT);
        });
    }

    function showTopFAB(): boolean {
        return window.scrollY > SCROLL_TO_TOP_HANDLE_HEIGHT;
    }

    return {
        observe,
        showTopFAB
    };
};
