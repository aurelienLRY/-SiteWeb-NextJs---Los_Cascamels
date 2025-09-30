// Définition des couleurs de base
const BASE_COLORS = {
  primary: "#FFB74B", // orange
  secondary: "#C09D77", // Marron comme couleur secondaire
  accent: "#FFB74B", // Orange comme accent
  background: "#FFFFFF",
  foreground: "#383838",
  text: "#7A7A7A",
  lightBlue: "#A1DBE6",
  bleuRoyale: "#2C4FBC",
  darkBlue: "#1F3473",
  pink: "#a62a6b",
  red: "#e2001a",
  purple: "#8373CE",
  green: "#94a016",
  cream: "#FFFAF2",
  lightGrey: "#E4E4E4",
  offWhite: "#F9F9F9",
};

// Configuration pour Tailwind
export const tailwindTheme = {
  light: {
    ...BASE_COLORS,
  },
  dark: {
    ...BASE_COLORS,
    background: "#1A202C",
    foreground: "#FFFFFF",
    text: "#E4E4E4",
  },
};

// Configuration pour NextUI
export const nextUITheme = {
  extend: "light",
  themes: {
    light: {
      colors: {
        background: {
          DEFAULT: BASE_COLORS.background,
        },
        foreground: {
          DEFAULT: BASE_COLORS.foreground,
        },
        primary: {
          DEFAULT: BASE_COLORS.primary,
          foreground: BASE_COLORS.background,
        },
        secondary: {
          DEFAULT: BASE_COLORS.secondary,
          foreground: BASE_COLORS.background,
        },
        accent: {
          DEFAULT: BASE_COLORS.accent,
          foreground: BASE_COLORS.background,
        },
        blue: {
          DEFAULT: BASE_COLORS.primary,
          foreground: BASE_COLORS.background,
        },
        brown: {
          DEFAULT: BASE_COLORS.secondary,
          foreground: BASE_COLORS.background,
        },
      },
    },
    dark: {
      colors: {
        background: {
          DEFAULT: "#1A202C",
        },
        foreground: {
          DEFAULT: BASE_COLORS.background,
        },
        primary: {
          DEFAULT: BASE_COLORS.darkBlue,
          foreground: BASE_COLORS.background,
        },
        secondary: {
          DEFAULT: BASE_COLORS.secondary,
          foreground: BASE_COLORS.background,
        },
        accent: {
          DEFAULT: BASE_COLORS.accent,
          foreground: BASE_COLORS.background,
        },
      },
    },
  },
};
