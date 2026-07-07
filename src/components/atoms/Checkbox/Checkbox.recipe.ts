import { defineSlotRecipe } from "@pandacss/dev";

export const checkboxRecipe = defineSlotRecipe({
  className: "checkbox",
  slots: ["root", "control", "indicator", "label"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      gap: "2",
      cursor: "pointer",
      userSelect: "none",
      "&[data-disabled]": { cursor: "not-allowed", opacity: "0.5" },
    },
    control: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      border: "1.5px solid",
      borderColor: "gray.300",
      borderRadius: "sm",
      bg: "white",
      transition: "all 0.15s ease",
      "&[data-checked]": {
        bg: "purple.500",
        borderColor: "purple.500",
      },
      "&[data-disabled]": {
        bg: "gray.100",
        borderColor: "gray.200",
      },
    },
    indicator: {
      color: "white",
      opacity: "0",
      transform: "scale(0.5)",
      transition: "all 0.15s ease",
      "&[data-checked]": {
        opacity: "1",
        transform: "scale(1)",
      },
    },
    label: {
      fontFamily: "body",
      color: "gray.900",
      "&[data-disabled]": { color: "gray.400" },
    },
  },
  variants: {
    size: {
      sm: {
        control: { width: "4", height: "4" },
        indicator: { fontSize: "10px" },
        label: { fontSize: "bodySm" },
      },
      md: {
        control: { width: "5", height: "5" },
        indicator: { fontSize: "12px" },
        label: { fontSize: "body" },
      },
      lg: {
        control: { width: "6", height: "6" },
        indicator: { fontSize: "14px" },
        label: { fontSize: "bodyLg" },
      },
    },
  },
  defaultVariants: { size: "md" },
});
