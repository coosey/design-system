import { defineSlotRecipe } from "@pandacss/dev";

export const selectRecipe = defineSlotRecipe({
  className: "select",
  slots: [
    "root",
    "trigger",
    "placeholder",
    "value",
    "icon",
    "content",
    "option",
  ],
  base: {
    root: {
      position: "relative",
      display: "inline-flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full",
    },
    trigger: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "full",
      border: "1px solid",
      borderColor: "gray.300",
      borderRadius: "md",
      bg: "white",
      cursor: "pointer",
      fontFamily: "body",
      transition: "border-color 0.15s ease, box-shadow 0.15s ease",
      _focus: {
        outline: "none",
        borderColor: "purple.500",
        boxShadow: "0 0 0 3px {colors.purple.100}",
      },
      "&[data-open]": {
        borderColor: "purple.500",
        boxShadow: "0 0 0 3px {colors.purple.100}",
      },
      "&[data-invalid]": {
        borderColor: "danger.500",
        _focus: { boxShadow: "0 0 0 3px {colors.danger.50}" },
      },
      "&[data-disabled]": {
        cursor: "not-allowed",
        bg: "gray.100",
        color: "gray.400",
        borderColor: "gray.200",
      },
    },
    placeholder: {
      color: "gray.400",
      fontFamily: "body",
    },
    value: {
      color: "gray.900",
      fontFamily: "body",
    },
    icon: {
      color: "gray.500",
      transition: "transform 0.15s ease",
      flexShrink: "0",
      "&[data-open]": { transform: "rotate(180deg)" },
    },
    content: {
      bg: "white",
      border: "1px solid",
      borderColor: "gray.200",
      borderRadius: "md",
      boxShadow: "lg",
      zIndex: "50",
      overflow: "hidden",
      maxHeight: "240px",
      overflowY: "auto",
      outline: "none",
    },
    option: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "full",
      cursor: "pointer",
      fontFamily: "body",
      color: "gray.900",
      transition: "background 0.1s ease",
      "&[data-highlighted]": {
        bg: "purple.50",
        color: "purple.700",
      },
      "&[data-selected]": {
        bg: "purple.50",
        color: "purple.700",
        fontWeight: "medium",
      },
      "&[data-disabled]": {
        cursor: "not-allowed",
        color: "gray.400",
        bg: "transparent",
      },
    },
  },
  variants: {
    size: {
      sm: {
        trigger: { fontSize: "bodySm", paddingX: "3", paddingY: "1.5" },
        option: { fontSize: "bodySm", paddingX: "3", paddingY: "1.5" },
        placeholder: { fontSize: "bodySm" },
        value: { fontSize: "bodySm" },
      },
      md: {
        trigger: { fontSize: "body", paddingX: "3", paddingY: "2" },
        option: { fontSize: "body", paddingX: "3", paddingY: "2" },
        placeholder: { fontSize: "body" },
        value: { fontSize: "body" },
      },
      lg: {
        trigger: { fontSize: "bodyLg", paddingX: "4", paddingY: "2.5" },
        option: { fontSize: "bodyLg", paddingX: "4", paddingY: "2.5" },
        placeholder: { fontSize: "bodyLg" },
        value: { fontSize: "bodyLg" },
      },
    },
  },
  defaultVariants: { size: "md" },
});
