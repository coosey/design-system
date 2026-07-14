import { defineSlotRecipe } from "@pandacss/dev";

export const avatarRecipe = defineSlotRecipe({
  className: "avatar",
  slots: ["root", "image", "fallback", "indicator"],
  base: {
    root: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      borderRadius: "full",
      bg: "purple.100",
      userSelect: "none",
    },
    image: {
      width: "full",
      height: "full",
      objectFit: "cover",
      borderRadius: "full",
    },
    fallback: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "full",
      height: "full",
      fontFamily: "body",
      fontWeight: "medium",
      color: "purple.700",
      textTransform: "uppercase",
      borderRadius: "full",
    },
    indicator: {
      position: "absolute",
      bottom: "0",
      right: "0",
      borderRadius: "full",
      border: "2px solid white",
      flexShrink: "0",
    },
  },
  variants: {
    size: {
      xs: {
        root: { width: "6", height: "6" },
        fallback: { fontSize: "caption" },
        indicator: { width: "2", height: "2" },
      },
      sm: {
        root: { width: "8", height: "8" },
        fallback: { fontSize: "bodySm" },
        indicator: { width: "2.5", height: "2.5" },
      },
      md: {
        root: { width: "10", height: "10" },
        fallback: { fontSize: "body" },
        indicator: { width: "3", height: "3" },
      },
      lg: {
        root: { width: "14", height: "14" },
        fallback: { fontSize: "bodyLg" },
        indicator: { width: "3.5", height: "3.5" },
      },
      xl: {
        root: { width: "20", height: "20" },
        fallback: { fontSize: "h3" },
        indicator: { width: "4", height: "4" },
      },
    },
    shape: {
      circle: { root: { borderRadius: "full" } },
      square: { root: { borderRadius: "md" } },
    },
    status: {
      online: { indicator: { bg: "success.500" } },
      offline: { indicator: { bg: "gray.400" } },
      away: { indicator: { bg: "warning.500" } },
      busy: { indicator: { bg: "danger.500" } },
    },
  },
  defaultVariants: { size: "md", shape: "circle" },
});
