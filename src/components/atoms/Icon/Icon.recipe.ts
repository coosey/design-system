import { defineRecipe } from "@pandacss/dev";

export const iconRecipe = defineRecipe({
  className: "icon",
  staticCss: ["*"],
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    color: "currentColor",
  },
  variants: {
    size: {
      xs: { width: "3", height: "3" },
      sm: { width: "4", height: "4" },
      md: { width: "5", height: "5" },
      lg: { width: "6", height: "6" },
      xl: { width: "8", height: "8" },
    },
    color: {
      inherit: { color: "currentColor" },
      primary: { color: "purple.500" },
      secondary: { color: "pink.400" },
      muted: { color: "gray.400" },
      subtle: { color: "gray.300" },
      success: { color: "success.500" },
      danger: { color: "danger.500" },
      warning: { color: "warning.500" },
      white: { color: "white" },
    },
  },
  defaultVariants: { size: "md", color: "inherit" },
});
