import { defineConfig } from "@pandacss/dev";
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  semanticTokens,
} from "./src/tokens";
import {
  buttonRecipe,
  inputRecipe,
  checkboxRecipe,
  radioRecipe,
  selectRecipe,
} from "./src/components/atoms/index.ts";

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
    },
  },
  theme: {
    extend: {
      tokens: { colors, fonts, fontSizes, fontWeights, lineHeights },
      semanticTokens,
      recipes: {
        button: buttonRecipe,
      },
      slotRecipes: {
        input: inputRecipe,
        checkbox: checkboxRecipe,
        radio: radioRecipe,
        select: selectRecipe,
      },
    },
  },
  jsxFramework: "react",
  strictTokens: true,
  // The output directory for your css system
  outdir: "styled-system",
});
