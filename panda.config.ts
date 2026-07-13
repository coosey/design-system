import { defineConfig } from "@pandacss/dev";
import {
  badgeRecipe,
  buttonRecipe,
  cardRecipe,
  checkboxRecipe,
  iconRecipe,
  inputRecipe,
  modalRecipe,
  radioRecipe,
  selectRecipe,
  spinnerRecipe,
  textRecipe,
  toastRecipe,
} from "./src/components/atoms/index.ts";
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  semanticTokens,
} from "./src/tokens";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  // Files to exclude
  exclude: ["./src/**/*.stories.tsx"],
  staticCss: {
    recipes: {
      button: ["*"],
      input: ["*"],
      checkbox: ["*"],
      radio: ["*"],
      select: ["*"],
      text: ["*"],
      card: ["*"],
      modal: ["*"],
      toast: ["*"],
      spinner: ["*"],
      icon: ["*"],
      badge: ["*"],
    },
  },
  theme: {
    extend: {
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      tokens: { colors, fonts, fontSizes, fontWeights, lineHeights },
      semanticTokens,
      recipes: {
        button: buttonRecipe,
        text: textRecipe,
        spinner: spinnerRecipe,
        icon: iconRecipe,
        badge: badgeRecipe,
      },
      slotRecipes: {
        input: inputRecipe,
        checkbox: checkboxRecipe,
        radio: radioRecipe,
        select: selectRecipe,
        card: cardRecipe,
        modal: modalRecipe,
        toast: toastRecipe,
      },
    },
  },
  jsxFramework: "react",
  strictTokens: true,
  // The output directory for your css system
  outdir: "styled-system",
});
