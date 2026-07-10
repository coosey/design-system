import { defineRecipe } from "@pandacss/dev";

export const textRecipe = defineRecipe({
  className: "text",
  staticCss: ["*"],
  base: {
    fontFamily: "body",
    color: "gray.900",
    margin: "0",
  },
  variants: {
    variant: {
      display: {
        fontFamily: "heading",
        fontSize: "display",
        fontWeight: "extrabold",
        lineHeight: "tight",
      },
      h1: {
        fontFamily: "heading",
        fontSize: "h1",
        fontWeight: "extrabold",
        lineHeight: "tight",
      },
      h2: {
        fontFamily: "heading",
        fontSize: "h2",
        fontWeight: "bold",
        lineHeight: "snug",
      },
      h3: {
        fontFamily: "heading",
        fontSize: "h3",
        fontWeight: "bold",
        lineHeight: "snug",
      },
      bodyLg: {
        fontSize: "bodyLg",
        fontWeight: "regular",
        lineHeight: "relaxed",
      },
      body: {
        fontSize: "body",
        fontWeight: "regular",
        lineHeight: "relaxed",
      },
      bodySm: {
        fontSize: "bodySm",
        fontWeight: "regular",
        lineHeight: "normal",
      },
      caption: {
        fontSize: "caption",
        fontWeight: "medium",
        lineHeight: "normal",
      },
    },
    color: {
      default: { color: "gray.900" },
      muted: { color: "gray.500" },
      subtle: { color: "gray.400" },
      primary: { color: "purple.500" },
      secondary: { color: "pink.400" },
      danger: { color: "danger.500" },
      success: { color: "success.500" },
      warning: { color: "warning.500" },
      inverse: { color: "white" },
    },
    align: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
    },
    truncate: {
      true: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
  },
  defaultVariants: {
    variant: "body",
    color: "default",
    align: "left",
  },
});
