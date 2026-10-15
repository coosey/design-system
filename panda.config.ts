import { defineConfig } from "@pandacss/dev";
import {
  avatarRecipe,
  badgeRecipe,
  buttonRecipe,
  cardRecipe,
  checkboxRecipe,
  dividerRecipe,
  iconRecipe,
  inputRecipe,
  modalRecipe,
  radioRecipe,
  selectRecipe,
  spinnerRecipe,
  textRecipe,
  toastRecipe,
  tooltipRecipe,
} from "./src/components/atoms/index.ts";
import { formFieldRecipe } from "./src/components/molecules/index.ts";
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
      avatar: ["*"],
      tooltip: ["*"],
      divider: ["*"],
      formField: ["*"],
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
        divider: dividerRecipe,
      },
      slotRecipes: {
        input: inputRecipe,
        checkbox: checkboxRecipe,
        radio: radioRecipe,
        select: selectRecipe,
        card: cardRecipe,
        modal: modalRecipe,
        toast: toastRecipe,
        avatar: avatarRecipe,
        tooltip: tooltipRecipe,
        formField: formFieldRecipe,
      },
    },
  },
  jsxFramework: "react",
  strictTokens: true,
  // The output directory for your css system
  outdir: "styled-system",
});
