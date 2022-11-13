export const useThemedScrollbars = (isDark: boolean): void => {
    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.classList.remove('dark-scrollbar', 'light-scrollbar');
    // @ts-ignore
    bodyElement.classList.add(isDark ? 'dark-scrollbar' : 'light-scrollbar');
};
