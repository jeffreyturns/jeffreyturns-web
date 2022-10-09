import { normal } from 'color-blend';

import { RGBA, SurfaceLevel } from '../types/surface';
import { GeneratedTheme } from '../types/theme';

import { hex2rgb, rgb2hex } from '../utils/convert-colors';

/** calculate elevation levels in HEX
 *  @param {string} primary - theme primary color
 *  @param {string} surface - theme surface color
 *  @param {SurfaceLevel} level - surface transparency level according to spec in enum
 *  @returns {string} calculated HEX color
 */
const calculateSurface = (primary: string, surface: string, level: SurfaceLevel): string => {
    const convertPrimary = hex2rgb(primary);
    const convertSurface = hex2rgb(surface);

    const primaryRgb: RGBA = { r: convertPrimary[0], g: convertPrimary[1], b: convertPrimary[2], a: level };

    const surfaceRGB: RGBA = { r: convertSurface[0], g: convertSurface[1], b: convertSurface[2], a: 1 };

    return rgb2hex(normal(surfaceRGB, primaryRgb).r, normal(surfaceRGB, primaryRgb).g, normal(surfaceRGB, primaryRgb).b);
};

/** wrapper for calculateSurface() for theme
 *  @param {GeneratedTheme} theme - generated theme from base generator
 *  @param {SurfaceLevel} level - surface transparency level according to spec in enum
 *  @returns {string} calculated HEX color
 */
export const blendSurface = (theme: GeneratedTheme, level: SurfaceLevel): string => calculateSurface(theme.primary, theme.surface, level);
