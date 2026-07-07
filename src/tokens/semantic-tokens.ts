import { defineSemanticTokens } from "@pandacss/dev";

const semanticTokens = defineSemanticTokens({
  colors: {
    primary: {
      value: { base: "{colors.purple.500}", _dark: "{colors.purple.400}" },
    },
    secondary: {
      value: { base: "{colors.pink.400}", _dark: "{colors.pink.400}" },
    },
    accent: {
      value: { base: "{colors.mint.400}", _dark: "{colors.mint.400}" },
    },
  },
});

export { semanticTokens };
