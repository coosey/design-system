import { defineRecipe } from "@pandacss/dev";

export const dividerRecipe = defineRecipe({
  className: "divider",
  staticCss: ["*"],
  base: {
    border: "none",
    margin: "0",
    flexShrink: "0",
  },
  variants: {
    orientation: {
      horizontal: {
        width: "full",
        height: "1px",
        bg: "gray.200",
      },
      vertical: {
        width: "1px",
        alignSelf: "stretch",
        bg: "gray.200",
      },
    },
    variant: {
      solid: {},
      dashed: {
        bg: "transparent",
        backgroundImage:
          "linear-gradient(to right, {colors.gray.300} 50%, transparent 50%)",
        backgroundSize: "8px 1px",
        backgroundRepeat: "repeat-x",
      },
    },
    spacing: {
      none: {},
      sm: {},
      md: {},
      lg: {},
    },
  },
  compoundVariants: [
    // horizontal spacing = vertical margins
    { orientation: "horizontal", spacing: "sm", css: { marginY: "2" } },
    { orientation: "horizontal", spacing: "md", css: { marginY: "4" } },
    { orientation: "horizontal", spacing: "lg", css: { marginY: "6" } },
    // vertical spacing = horizontal margins
    { orientation: "vertical", spacing: "sm", css: { marginX: "2" } },
    { orientation: "vertical", spacing: "md", css: { marginX: "4" } },
    { orientation: "vertical", spacing: "lg", css: { marginX: "6" } },
    // dashed vertical needs different gradient direction
    {
      orientation: "vertical",
      variant: "dashed",
      css: {
        backgroundImage:
          "linear-gradient(to bottom, {colors.gray.300} 50%, transparent 50%)",
        backgroundSize: "1px 8px",
        backgroundRepeat: "repeat-y",
      },
    },
  ],
  defaultVariants: {
    orientation: "horizontal",
    variant: "solid",
    spacing: "md",
  },
});
