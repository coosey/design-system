import { defineTokens } from "@pandacss/dev";

const fonts = defineTokens.fonts({
  heading: { value: "Nunito, sans-serif" },
  body: { value: "Inter, sans-serif" },
});

const fontSizes = defineTokens.fontSizes({
  display: { value: "40px" },
  h1: { value: "32px" },
  h2: { value: "24px" },
  h3: { value: "20px" },
  bodyLg: { value: "18px" },
  body: { value: "16px" },
  bodySm: { value: "14px" },
  caption: { value: "12px" },
});

const fontWeights = defineTokens.fontWeights({
  medium: { value: 500 },
  bold: { value: 700 },
  extrabold: { value: 800 },
});

const lineHeights = defineTokens.lineHeights({
  tight: { value: 1.15 },
  snug: { value: 1.25 },
  normal: { value: 1.5 },
  relaxed: { value: 1.6 },
});

export { fonts, fontSizes, fontWeights, lineHeights };
