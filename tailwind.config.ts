import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { themeColors } from "./src/styles/ThemeColors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        title: ["var(--font-love-ya-like-a-sister)", "cursive"],
        subtitle: ["var(--font-shadows-into-light-two)", "cursive"],
      },
      colors: {
        ...themeColors.light,
        dark: themeColors.dark,
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            ...themeColors.light,
            background: themeColors.light.background,
            foreground: themeColors.light.primary,
          },
        },
        dark: {
          colors: {
            ...themeColors.dark,
            background: themeColors.dark.background,
            foreground: themeColors.dark.primary,
          },
        },
      },
    }),
  ],
} satisfies Config;
