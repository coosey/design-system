import { defineSlotRecipe } from "@pandacss/dev";

export const modalRecipe = defineSlotRecipe({
  className: "modal",
  slots: ["overlay", "content", "header", "body", "footer", "closeButton"],
  base: {
    overlay: {
      position: "fixed",
      inset: "0",
      bg: "rgba(0, 0, 0, 0.5)",
      zIndex: "100",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "4",
    },
    content: {
      position: "relative",
      bg: "white",
      borderRadius: "lg",
      boxShadow: "xl",
      display: "flex",
      flexDirection: "column",
      maxHeight: "90vh",
      width: "full",
      outline: "none",
      zIndex: "101",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: "1px",
      borderBottomColor: "gray.200",
      flexShrink: "0",
    },
    body: {
      flex: "1",
      overflowY: "auto",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "2",
      borderTopWidth: "1px",
      borderTopColor: "gray.200",
      flexShrink: "0",
    },
    closeButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "md",
      color: "gray.500",
      bg: "transparent",
      border: "none",
      cursor: "pointer",
      transition: "background 0.15s ease",
      _hover: { bg: "gray.100", color: "gray.700" },
      _focus: {
        outline: "none",
        boxShadow: "0 0 0 3px {colors.purple.100}",
      },
    },
  },
  variants: {
    size: {
      sm: { content: { maxWidth: "400px" } },
      md: { content: { maxWidth: "560px" } },
      lg: { content: { maxWidth: "720px" } },
      full: {
        content: { maxWidth: "100%", maxHeight: "100vh", borderRadius: "0" },
      },
    },
    padding: {
      sm: {
        header: { paddingX: "4", paddingY: "3" },
        body: { paddingX: "4", paddingY: "3" },
        footer: { paddingX: "4", paddingY: "3" },
        closeButton: { width: "7", height: "7" },
      },
      md: {
        header: { paddingX: "6", paddingY: "4" },
        body: { paddingX: "6", paddingY: "4" },
        footer: { paddingX: "6", paddingY: "4" },
        closeButton: { width: "8", height: "8" },
      },
      lg: {
        header: { paddingX: "8", paddingY: "6" },
        body: { paddingX: "8", paddingY: "6" },
        footer: { paddingX: "8", paddingY: "6" },
        closeButton: { width: "9", height: "9" },
      },
    },
  },
  defaultVariants: { size: "md", padding: "md" },
});
