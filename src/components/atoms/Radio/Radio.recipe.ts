import { defineSlotRecipe } from "@pandacss/dev";

export const radioRecipe = defineSlotRecipe({
  className: "radio",
  slots: ["root", "control", "indicator", "label"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      gap: "2",
      cursor: "pointer",
      userSelect: "none",
      _disabled: { cursor: "not-allowed", opacity: "0.5" },
    },
    control: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      border: "1.5px solid",
      borderColor: "gray.300",
      borderRadius: "full",
      bg: "white",
      transition: "all 0.15s ease",
      _checked: {
        borderColor: "purple.500",
      },
      _focus: {
        outline: "none",
        boxShadow: "0 0 0 3px {colors.purple.100}",
      },
      _invalid: {
        borderColor: "danger.500",
        _checked: { borderColor: "danger.500" },
      },
      _disabled: {
        bg: "gray.100",
        borderColor: "gray.200",
      },
      "input:checked + &": {
        borderColor: "purple.500",
      },
      "input:disabled + &": {
        bg: "gray.100",
        borderColor: "gray.200",
      },
    },
    indicator: {
      borderRadius: "full",
      bg: "purple.500",
      width: "0",
      height: "0",
      transition: "all 0.15s ease",
      _checked: {
        width: "2",
        height: "2",
      },
      _invalid: {
        _checked: { bg: "danger.500" },
      },
      "input:checked ~ * &": {
        width: "2",
        height: "2",
      },
    },
    label: {
      fontFamily: "body",
      color: "gray.900",
      _disabled: { color: "gray.400" },
    },
  },
  variants: {
    size: {
      sm: {
        control: { width: "4", height: "4" },
        label: { fontSize: "bodySm" },
      },
      md: {
        control: { width: "5", height: "5" },
        label: { fontSize: "body" },
      },
      lg: {
        control: { width: "6", height: "6" },
        label: { fontSize: "bodyLg" },
      },
    },
  },
  defaultVariants: { size: "md" },
});
