import { BASELINE_SCHEME_SEED_COLOR } from '../common/constants';

import { MaterialTheme } from '../types/scheme';
import { SurfaceLevel } from '../types/surface';
import { GeneratedTheme, HEX, StateColors, StatePalettes, ThemeSchemes, TonalsPalette } from '../types/theme';

import { blendSurface } from './calc-surface';
import { generateThemeFromSeed, generateTonals } from './generate-theme';

/** generate default state colors
 *  @see https://m3.material.io/styles/color/the-color-system/custom-colors
 *  @param {HEX} seed color
 *  @returns {StatePalettes} palletes of 4 colors
 */
const defaultStateColors = (seed: HEX): StatePalettes => {
    return {
        error: generateTonals('#BA1B1B', true, seed),
        warning: generateTonals('#FFBB29', true, seed),
        success: generateTonals('#1EA446', true, seed),
        info: generateTonals('#426878', true, seed)
    } as const;
};

/** generate state colors from HEX
 *  @param {HEX} seed - color seed
 *  @param {boolean} harmonize - should harmonize colors
 *  @returns {StatePalettes} palletes of 4 colors
 */
export const generateStateColors = (seed: HEX, colors: StateColors, harmonize: boolean = true): StatePalettes => {
    return {
        error: generateTonals(colors.error, harmonize, seed),
        warning: generateTonals(colors.warning, harmonize, seed),
        success: generateTonals(colors.success, harmonize, seed),
        info: generateTonals(colors.info, harmonize, seed)
    } as const;
};

/** provide default light / dark schemes
 *  @see https://m3.material.io/styles/color/the-color-system/tokens
 *  @returns {ThemeSchemes} - dark / light schemes
 */
export const defaultSchemes = (): ThemeSchemes => themeFromSeed(BASELINE_SCHEME_SEED_COLOR);

/** provide light / dark schemes from HEX
 *  @see https://m3.material.io/styles/color/dynamic-color/user-generated-color
 *  @param {HEX} seed - color seed
 *  @param {StateColors} stateColors - provide custom state colors
 *  @returns {ThemeSchemes} - dark / light schemes
 */
export const themeFromSeed = (
    seed: HEX,
    stateColors: { error: TonalsPalette; warning: TonalsPalette; success: TonalsPalette; info: TonalsPalette } = defaultStateColors(seed)
): ThemeSchemes => {
    return {
        light: schemeLight(generateThemeFromSeed(seed, false), stateColors),
        dark: schemeDark(generateThemeFromSeed(seed, true), stateColors)
    } as const;
};

/** provide light Material Theme from Generated Theme
 *  @param {GeneratedTheme} theme - Generated theme from seed
 *  @param {StateColors} stateColors - provide custom state colors
 *  @returns {MaterialTheme} light theme
 */
const schemeLight = (
    theme: GeneratedTheme,
    stateColors: { error: TonalsPalette; warning: TonalsPalette; success: TonalsPalette; info: TonalsPalette }
): MaterialTheme => {
    return {
        dark: false,
        colors: {
            primary: theme.primary,
            'on-primary': theme.onPrimary,
            'primary-container': theme.primaryContainer,
            'on-primary-container': theme.onPrimaryContainer,
            secondary: theme.secondary,
            'on-secondary': theme.onSecondary,
            'secondary-container': theme.secondaryContainer,
            'on-secondary-container': theme.onSecondaryContainer,
            tertiary: theme.tertiary,
            'on-tertiary': theme.onTertiary,
            'tertiary-container': theme.tertiaryContainer,
            'on-tertiary-container': theme.onTertiaryContainer,
            error: theme.error,
            'error-container': theme.errorContainer,
            'on-error': theme.onError,
            'on-error-container': theme.onErrorContainer,
            background: theme.background,
            'on-background': theme.onBackground,
            surface: theme.surface,
            'on-surface': theme.onSurface,
            'surface-variant': theme.surfaceVariant,
            'on-surface-variant': theme.onSurfaceVariant,
            outline: theme.outline,
            'inverse-on-surface': theme.inverseOnSurface,
            'inverse-surface': theme.inverseSurface,
            'inverse-primary': theme.inversePrimary,

            'surface-1': blendSurface(theme, SurfaceLevel.ONE),
            'surface-2': blendSurface(theme, SurfaceLevel.TWO),
            'surface-3': blendSurface(theme, SurfaceLevel.THREE),
            'surface-4': blendSurface(theme, SurfaceLevel.FOUR),
            'surface-5': blendSurface(theme, SurfaceLevel.FIVE),

            'state-error': stateColors.error[40],
            'state-on-error': stateColors.error[100],
            'state-error-container': stateColors.error[90],
            'state-on-error-container': stateColors.error[10],

            'state-warning': stateColors.warning[40],
            'state-on-warning': stateColors.warning[100],
            'state-warning-container': stateColors.warning[90],
            'state-on-warning-container': stateColors.warning[10],

            'state-success': stateColors.success[40],
            'state-on-success': stateColors.success[100],
            'state-success-container': stateColors.success[90],
            'state-on-success-container': stateColors.success[10],

            'state-info': stateColors.info[40],
            'state-on-info': stateColors.info[100],
            'state-info-container': stateColors.info[90],
            'state-on-info-container': stateColors.info[10]
        },
        variables: {
            'border-color': theme.outline,
            'border-opacity': 0.12,
            'high-emphasis-opacity': 0.87,
            'medium-emphasis-opacity': 0.6,
            'disabled-opacity': 0.38,
            'idle-opacity': 0.04,
            'hover-opacity': 0.04,
            'focus-opacity': 0.12,
            'selected-opacity': 0.08,
            'activated-opacity': 0.12,
            'pressed-opacity': 0.12,
            'dragged-opacity': 0.08,
            'kbd-background-color': '#212529',
            'kbd-color': '#FFFFFF',
            'code-background-color': '#C2C2C2'
        }
    };
};

/** provide dark Material Theme from Generated Theme
 *  @param {GeneratedTheme} theme - Generated theme from seed
 *  @param {StateColors} stateColors - provide custom state colors
 *  @returns {MaterialTheme} dark theme
 */
const schemeDark = (
    theme: GeneratedTheme,
    stateColors: { error: TonalsPalette; warning: TonalsPalette; success: TonalsPalette; info: TonalsPalette }
): MaterialTheme => {
    return {
        dark: true,
        colors: {
            primary: theme.primary,
            'on-primary': theme.onPrimary,
            'primary-container': theme.primaryContainer,
            'on-primary-container': theme.onPrimaryContainer,
            secondary: theme.secondary,
            'on-secondary': theme.onSecondary,
            'secondary-container': theme.secondaryContainer,
            'on-secondary-container': theme.onSecondaryContainer,
            tertiary: theme.tertiary,
            'on-tertiary': theme.onTertiary,
            'tertiary-container': theme.tertiaryContainer,
            'on-tertiary-container': theme.onTertiaryContainer,
            error: theme.error,
            'error-container': theme.errorContainer,
            'on-error': theme.onError,
            'on-error-container': theme.onErrorContainer,
            background: theme.background,
            'on-background': theme.onBackground,
            surface: theme.surface,
            'on-surface': theme.onSurface,
            'surface-variant': theme.surfaceVariant,
            'on-surface-variant': theme.onSurfaceVariant,
            outline: theme.outline,
            'inverse-on-surface': theme.inverseOnSurface,
            'inverse-surface': theme.inverseSurface,
            'inverse-primary': theme.inversePrimary,

            'surface-1': blendSurface(theme, SurfaceLevel.ONE),
            'surface-2': blendSurface(theme, SurfaceLevel.TWO),
            'surface-3': blendSurface(theme, SurfaceLevel.THREE),
            'surface-4': blendSurface(theme, SurfaceLevel.FOUR),
            'surface-5': blendSurface(theme, SurfaceLevel.FIVE),

            'state-error': stateColors.error[80],
            'state-on-error': stateColors.error[20],
            'state-error-container': stateColors.error[30],
            'state-on-error-container': stateColors.error[90],

            'state-warning': stateColors.warning[80],
            'state-on-warning': stateColors.warning[20],
            'state-warning-container': stateColors.warning[30],
            'state-on-warning-container': stateColors.warning[90],

            'state-success': stateColors.success[80],
            'state-on-success': stateColors.success[20],
            'state-success-container': stateColors.success[30],
            'state-on-success-container': stateColors.success[90],

            'state-info': stateColors.info[80],
            'state-on-info': stateColors.info[20],
            'state-info-container': stateColors.info[30],
            'state-on-info-container': stateColors.info[90]
        },
        variables: {
            'border-color': theme.outline,
            'border-opacity': 0.12,
            'high-emphasis-opacity': 0.87,
            'medium-emphasis-opacity': 0.6,
            'disabled-opacity': 0.38,
            'idle-opacity': 0.1,
            'hover-opacity': 0.04,
            'focus-opacity': 0.12,
            'selected-opacity': 0.08,
            'activated-opacity': 0.12,
            'pressed-opacity': 0.16,
            'dragged-opacity': 0.08,
            'kbd-background-color': '#212529',
            'kbd-color': '#FFFFFF',
            'code-background-color': '#B7B7B7'
        }
    };
};

export const whiteout: ThemeSchemes = {
    light: schemeLight(
        {
            primary: '#5d5f5f',
            onPrimary: '#ffffff',
            primaryContainer: '#e2e2e2',
            onPrimaryContainer: '#1a1c1c',
            secondary: '#5f5e5e',
            onSecondary: '#ffffff',
            secondaryContainer: '#e4e2e1',
            onSecondaryContainer: '#1b1c1c',
            tertiary: '#5f5e5f',
            onTertiary: '#ffffff',
            tertiaryContainer: '#e5e2e2',
            onTertiaryContainer: '#1c1b1c',
            error: '#ba1a1a',
            errorContainer: '#ffdad6',
            onError: '#ffffff',
            onErrorContainer: '#410002',
            background: '#f6feff',
            onBackground: '#1c1b1b',
            surface: '#f6feff',
            onSurface: '#1c1b1b',
            surfaceVariant: '#e5e2e1',
            onSurfaceVariant: '#474646',
            outline: '#787776',
            inverseOnSurface: '#f4f0ef',
            inverseSurface: '#313030',
            inversePrimary: '#c6c6c7'
        },
        defaultStateColors('#ffffff')
    ),
    dark: schemeDark(
        {
            primary: '#c6c6c7',
            onPrimary: '#2f3131',
            primaryContainer: '#454747',
            onPrimaryContainer: '#e2e2e2',
            secondary: '#c8c6c5',
            onSecondary: '#303030',
            secondaryContainer: '#474746',
            onSecondaryContainer: '#e4e2e1',
            tertiary: '#c9c6c7',
            onTertiary: '#313031',
            tertiaryContainer: '#474647',
            onTertiaryContainer: '#e5e2e2',
            error: '#ffb4ab',
            errorContainer: '#690005',
            onError: '#690005',
            onErrorContainer: '#93000a',
            background: '#1c1b1b',
            onBackground: '#e5e2e1',
            surface: '#1c1b1b',
            onSurface: '#e5e2e1',
            surfaceVariant: '#474646',
            onSurfaceVariant: '#c9c6c5',
            outline: '#929090',
            inverseOnSurface: '#e5e2e1',
            inverseSurface: '#313030',
            inversePrimary: '#5d5f5f'
        },
        defaultStateColors('#ffffff')
    )
};
