import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { tailwindTheme, nextUITheme } from "./src/styles/ThemeColors";

// Fonction pour générer la safelist à partir des couleurs du thème
const generateSafelist = () => {
  const colors = tailwindTheme.light;
  const safelistItems: string[] = [];

  // Parcourir toutes les couleurs
  Object.entries(colors).forEach(([colorName, colorValue]) => {
    if (typeof colorValue === "object") {
      // Pour les couleurs avec des variantes (comme pink-300)
      Object.keys(colorValue).forEach((shade) => {
        safelistItems.push(`bg-${colorName}-${shade}`);
        safelistItems.push(`text-${colorName}-${shade}`);
        safelistItems.push(`border-${colorName}-${shade}`);
      });
    } else {
      // Pour les couleurs simples (comme primary)
      safelistItems.push(`bg-${colorName}`);
      safelistItems.push(`text-${colorName}`);
      safelistItems.push(`border-${colorName}`);
    }
  });

  return safelistItems;
};

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
        ...tailwindTheme.light,
        dark: tailwindTheme.dark,
      },
    },
  },
  safelist: generateSafelist(),
  plugins: [
    nextui({
      themes: nextUITheme.themes,
      defaultTheme: "light",
    }),
  ],
} satisfies Config;
