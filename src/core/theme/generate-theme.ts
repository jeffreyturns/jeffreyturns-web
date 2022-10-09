import { hexFromArgb, CorePalette, argbFromHex, TonalPalette, Blend } from '@material/material-color-utilities';

import { BASELINE_SCHEME_SEED_COLOR } from '../common/constants';
import { GeneratedTheme, PaletteKey, TonalKey, TonalsPalette } from '../types/theme';

import { hex2dec } from '../utils/convert-colors';

export const generateThemeFromSeed = (seed: string, isDark: boolean): GeneratedTheme => {
    const palette = CorePalette.of(argbFromHex(seed));

    const calcTone = (key: PaletteKey, tones: [light: TonalKey, dark: TonalKey]) => palette[key].tone(isDark ? tones[1] : tones[0]);

    const assignHexTone = (key: PaletteKey, tones: [light: TonalKey, dark: TonalKey]) => hexFromArgb(calcTone(key, tones));

    return {
        primary: assignHexTone('a1', [40, 80]),
        onPrimary: assignHexTone('a1', [100, 20]),
        primaryContainer: assignHexTone('a1', [90, 30]),
        onPrimaryContainer: assignHexTone('a1', [10, 90]),
        secondary: assignHexTone('a2', [40, 80]),
        onSecondary: assignHexTone('a2', [100, 20]),
        secondaryContainer: assignHexTone('a2', [90, 30]),
        onSecondaryContainer: assignHexTone('a2', [10, 90]),
        tertiary: assignHexTone('a3', [40, 80]),
        onTertiary: assignHexTone('a3', [100, 20]),
        tertiaryContainer: assignHexTone('a3', [90, 30]),
        onTertiaryContainer: assignHexTone('a3', [10, 90]),
        error: assignHexTone('error', [40, 80]),
        onError: assignHexTone('error', [100, 20]),
        errorContainer: assignHexTone('error', [90, 30]),
        onErrorContainer: assignHexTone('error', [10, 90]),
        background: assignHexTone('n1', [99, 10]),
        onBackground: assignHexTone('n1', [10, 90]),
        surface: assignHexTone('n1', [99, 10]),
        onSurface: assignHexTone('n1', [10, 90]),
        surfaceVariant: assignHexTone('n2', [90, 30]),
        onSurfaceVariant: assignHexTone('n2', [30, 80]),
        outline: assignHexTone('n2', [50, 60]),
        inverseOnSurface: assignHexTone('n1', [95, 10]),
        inverseSurface: assignHexTone('n1', [20, 90]),
        inversePrimary: assignHexTone('a1', [80, 40])
    };
};

/** provide tonal palette for color
 *  @param {string} hex - HEX code of color
 *  @param {boolean} harmonize - should harmonize palette
 *  @param {boolean} seedColor - seed color if harmonize is true (default: seed color of MD3 theme)
 *  @returns {TonalsPalette} - pallete of generated color
 */
export const generateTonals = (hex: string, harmonize = false, seedColor = BASELINE_SCHEME_SEED_COLOR): TonalsPalette => {
    let color: string = hex;
    if (harmonize) {
        color = hexFromArgb(Blend.harmonize(argbFromHex(hex), argbFromHex(seedColor)));
    }
    const core = TonalPalette.fromInt(Number.parseInt(hex2dec(color)));
    return {
        100: hexFromArgb(core.tone(100)),
        99: hexFromArgb(core.tone(99)),
        95: hexFromArgb(core.tone(95)),
        90: hexFromArgb(core.tone(90)),
        80: hexFromArgb(core.tone(80)),
        70: hexFromArgb(core.tone(70)),
        60: hexFromArgb(core.tone(60)),
        50: hexFromArgb(core.tone(50)),
        40: hexFromArgb(core.tone(40)),
        30: hexFromArgb(core.tone(30)),
        20: hexFromArgb(core.tone(20)),
        10: hexFromArgb(core.tone(10)),
        0: hexFromArgb(core.tone(0))
    };
};
