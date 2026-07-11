import { defineSlotRecipe } from "@pandacss/dev";

export const cardRecipe = defineSlotRecipe({
  className: "card",
  slots: ["root", "header", "body", "footer"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      bg: "white",
      borderRadius: "lg",
      overflow: "hidden",
      width: "full",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: "1px",
      borderBottomColor: "gray.200",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      flex: "1",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      gap: "3",
      borderTopWidth: "1px",
      borderTopColor: "gray.200",
    },
  },
  variants: {
    variant: {
      elevated: {
        root: {
          boxShadow: "md",
          border: "none",
        },
      },
      outlined: {
        root: {
          border: "1px solid",
          borderColor: "gray.200",
          boxShadow: "none",
        },
      },
      filled: {
        root: {
          bg: "gray.50",
          border: "none",
          boxShadow: "none",
        },
      },
    },
    size: {
      sm: {
        header: { paddingX: "4", paddingY: "3" },
        body: { paddingX: "4", paddingY: "3" },
        footer: { paddingX: "4", paddingY: "3" },
      },
      md: {
        header: { paddingX: "6", paddingY: "4" },
        body: { paddingX: "6", paddingY: "4" },
        footer: { paddingX: "6", paddingY: "4" },
      },
      lg: {
        header: { paddingX: "8", paddingY: "5" },
        body: { paddingX: "8", paddingY: "5" },
        footer: { paddingX: "8", paddingY: "5" },
      },
    },
  },
  defaultVariants: { variant: "elevated", size: "md" },
});
