import { defineRecipe } from "@pandacss/dev";

export const spinnerRecipe = defineRecipe({
  className: "spinner",
  staticCss: ["*"],
  base: {
    display: "inline-block",
    borderRadius: "full",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "transparent",
    borderTopColor: "currentColor",
    animation: "spin 0.65s linear infinite",
    flexShrink: "0",
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
      primary: { color: "purple.500" },
      secondary: { color: "pink.400" },
      white: { color: "white" },
      muted: { color: "gray.400" },
      success: { color: "success.500" },
      danger: { color: "danger.500" },
    },
  },
  defaultVariants: { size: "md", color: "primary" },
});
