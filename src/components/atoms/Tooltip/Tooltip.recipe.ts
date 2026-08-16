import { defineSlotRecipe } from "@pandacss/dev";

export const tooltipRecipe = defineSlotRecipe({
  className: "tooltip",
  slots: ["content", "arrow"],
  base: {
    content: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      paddingX: "2.5",
      paddingY: "1.5",
      borderRadius: "md",
      fontFamily: "body",
      fontSize: "bodySm",
      fontWeight: "medium",
      lineHeight: "normal",
      maxWidth: "240px",
      zIndex: "150",
      pointerEvents: "none",
      wordBreak: "break-word",
    },
    arrow: {
      position: "absolute",
      width: "8px",
      height: "8px",
      transform: "rotate(45deg)",
      zIndex: "-1",
    },
  },
  variants: {
    theme: {
      dark: {
        content: { bg: "gray.900", color: "white" },
        arrow: { bg: "gray.900" },
      },
      light: {
        content: {
          bg: "white",
          color: "gray.900",
          border: "1px solid",
          borderColor: "gray.200",
          boxShadow: "md",
        },
        arrow: {
          bg: "white",
          border: "1px solid",
          borderColor: "gray.200",
        },
      },
    },
  },
  defaultVariants: { theme: "dark" },
});
