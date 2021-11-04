import Vue from "vue";
import Vuetify from "vuetify/lib";
import ru from "../locales/ru";
import en from "../locales/en";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "md",
    },
    lang: {
        locales: { en, ru },
        current: "ru",
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: "#8A5000",
                onPrimary: "#FFFFFF",
                primaryContainer: "#FFDCBA",
                onPrimaryContainer: "#2C1600",
                secondary: "#735A42",
                onSecondary: "#FFFFFF",
                secondaryContainer: "#FFDDBF",
                onSecondaryContainer: "#291806",
                tertiary: "#57633A",
                onTertiary: "#FFFFFF",
                tertiaryContainer: "#DBE8B5",
                onTertiaryContainer: "#151F01",
                error: "#BA1B1B",
                onError: "#FFFFFF",
                errorContainer: "#FFDAD4",
                onErrorContainer: "#410001",

                info: "#1B51BA",
                warning: "#BA671B",
                success: "#1BBA51",

                background: "#FCFCFC",
                onBackground: "#1F1B17",
                surface: "#FCFCFC",
                onSurface: "#1F1B17",
                surfaceVariant: "#F2DFD1",
                onSurfaceVariant: "#51453A",
                outline: "#837569",

                elevation0: "#FCFCFC",
                elevation1: "#F6F3EF",
                elevation2: "#F3EEE8",
                elevation3: "#EFE9E0",
                elevation4: "#EEE7DE",
                elevation5: "#ECE4D9",

                scrollbarBackground: "#E6E6E6",
                scrollbarThumb: "#B0B0B0",
                scrollbarThumbHover: "#8C8C8C",
            },
            dark: {
                primary: "#FFB86A",
                onPrimary: "#4A2800",
                primaryContainer: "#6A3C00",
                onPrimaryContainer: "#FFDCBA",
                secondary: "#E1C1A4",
                onSecondary: "#402C18",
                secondaryContainer: "#59422C",
                onSecondaryContainer: "#FFDDBF",
                tertiary: "#BFCC9B",
                onTertiary: "#2A3411",
                tertiaryContainer: "#404B25",
                onTertiaryContainer: "#DBE8B5",
                error: "#FFB4A9",
                onError: "#680003",
                errorContainer: "#930006",
                onErrorContainer: "#FFDAD4",

                info: "#A9C1FF",
                warning: "#FFCDA9",
                success: "#A9FFC6",

                background: "#1F1B17",
                onBackground: "#EBE0D9",
                surface: "#1F1B17",
                onSurface: "#EBE0D9",
                surfaceVariant: "#51453A",
                onSurfaceVariant: "#D4C3B5",
                outline: "#9D8E81",

                elevation0: "#1F1B17",
                elevation1: "#2A231B",
                elevation2: "#31281E",
                elevation3: "#382C20",
                elevation4: "#3A2E21",
                elevation5: "#3E3123",

                scrollbarBackground: "#202020",
                scrollbarThumb: "#3E3E3E",
                scrollbarThumbHover: "#7C7C7C",
            },
        },
    },
});