/** theme interface
 *  @see https://m3.material.io/theme-builder
 */
export interface MaterialTheme {
    dark: boolean;
    colors: {
        primary: string;
        'on-primary': string;
        'primary-container': string;
        'on-primary-container': string;
        secondary: string;
        'on-secondary': string;
        'secondary-container': string;
        'on-secondary-container': string;
        tertiary: string;
        'on-tertiary': string;
        'tertiary-container': string;
        'on-tertiary-container': string;
        error: string;
        'error-container': string;
        'on-error': string;
        'on-error-container': string;
        background: string;
        'on-background': string;
        surface: string;
        'on-surface': string;
        'surface-variant': string;
        'on-surface-variant': string;
        outline: string;
        'inverse-on-surface': string;
        'inverse-surface': string;
        'inverse-primary': string;

        'surface-1': string;
        'surface-2': string;
        'surface-3': string;
        'surface-4': string;
        'surface-5': string;

        'state-error'?: string;
        'state-on-error'?: string;
        'state-error-container'?: string;
        'state-on-error-container'?: string;

        'state-warning'?: string;
        'state-on-warning'?: string;
        'state-warning-container'?: string;
        'state-on-warning-container'?: string;

        'state-success'?: string;
        'state-on-success'?: string;
        'state-success-container'?: string;
        'state-on-success-container'?: string;

        'state-info'?: string;
        'state-on-info'?: string;
        'state-info-container'?: string;
        'state-on-info-container'?: string;
    };
    variables: {
        'border-color': string;
        'border-opacity': number;
        'high-emphasis-opacity': number;
        'medium-emphasis-opacity': number;
        'disabled-opacity': number;
        'idle-opacity': number;
        'hover-opacity': number;
        'focus-opacity': number;
        'selected-opacity': number;
        'activated-opacity': number;
        'pressed-opacity': number;
        'dragged-opacity': number;
        'kbd-background-color': string;
        'kbd-color': string;
        'code-background-color': string;
    };
}
