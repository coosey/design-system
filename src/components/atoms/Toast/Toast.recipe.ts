import { defineSlotRecipe } from "@pandacss/dev";

export const toastRecipe = defineSlotRecipe({
  className: "toast",
  slots: [
    "root",
    "icon",
    "content",
    "title",
    "description",
    "closeButton",
    "container",
  ],
  base: {
    container: {
      position: "fixed",
      bottom: "4",
      right: "4",
      display: "flex",
      flexDirection: "column",
      gap: "2",
      zIndex: "200",
      pointerEvents: "none",
      width: "360px",
    },
    root: {
      display: "flex",
      alignItems: "flex-start",
      gap: "3",
      bg: "white",
      border: "1px solid",
      borderRadius: "lg",
      boxShadow: "lg",
      pointerEvents: "auto",
      width: "full",
      animation: "slideIn 0.2s ease",
    },
    icon: {
      flexShrink: "0",
      width: "5",
      height: "5",
      marginTop: "0.5",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5",
      flex: "1",
    },
    title: {
      fontFamily: "body",
      fontSize: "bodySm",
      fontWeight: "medium",
      color: "gray.900",
    },
    description: {
      fontFamily: "body",
      fontSize: "bodySm",
      color: "gray.500",
    },
    closeButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      width: "6",
      height: "6",
      borderRadius: "md",
      border: "none",
      bg: "transparent",
      color: "gray.400",
      cursor: "pointer",
      transition: "background 0.15s ease",
      _hover: { bg: "gray.100", color: "gray.600" },
    },
  },
  variants: {
    status: {
      success: {
        root: { borderColor: "success.500", paddingX: "4", paddingY: "3" },
        icon: { color: "success.500" },
      },
      error: {
        root: { borderColor: "danger.500", paddingX: "4", paddingY: "3" },
        icon: { color: "danger.500" },
      },
      warning: {
        root: { borderColor: "warning.500", paddingX: "4", paddingY: "3" },
        icon: { color: "warning.500" },
      },
      info: {
        root: { borderColor: "purple.500", paddingX: "4", paddingY: "3" },
        icon: { color: "purple.500" },
      },
    },
  },
  defaultVariants: { status: "info" },
});
