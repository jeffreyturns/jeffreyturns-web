import { MaterialTheme } from './scheme';

export type HEX = string;

export type StateColors = {
    error: string;
    warning: string;
    success: string;
    info: string;
};

export type StatePalettes = {
    error: TonalsPalette;
    warning: TonalsPalette;
    success: TonalsPalette;
    info: TonalsPalette;
};

export type ThemeSchemes = {
    light: MaterialTheme;
    dark: MaterialTheme;
};

export interface GeneratedTheme {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    errorContainer: string;
    onError: string;
    onErrorContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    inverseOnSurface: string;
    inverseSurface: string;
    inversePrimary: string;
}

export type PaletteKey = 'a1' | 'a2' | 'a3' | 'error' | 'n1' | 'n2';

export type TonalKey = 100 | 99 | 95 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 | 0;

export interface TonalsPalette {
    100: string;
    99: string;
    95: string;
    90: string;
    80: string;
    70: string;
    60: string;
    50: string;
    40: string;
    30: string;
    20: string;
    10: string;
    0: string;
}
