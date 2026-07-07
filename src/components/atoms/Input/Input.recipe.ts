import { defineSlotRecipe } from "@pandacss/dev";

export const inputRecipe = defineSlotRecipe({
  className: "input",
  slots: ["root", "label", "field", "errorMessage"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      fontFamily: "body",
    },
    label: {
      fontSize: "bodySm",
      fontWeight: "medium",
      color: "gray.700",
    },
    field: {
      fontFamily: "body",
      fontSize: "body",
      border: "1px solid",
      borderColor: "gray.300",
      borderRadius: "md",
      paddingX: "3",
      paddingY: "2",
      color: "gray.900",
      transition: "border-color 0.15s ease, box-shadow 0.15s ease",
      _placeholder: { color: "gray.400" },
      _focus: {
        outline: "none",
        borderColor: "purple.500",
        boxShadow: "0 0 0 3px {colors.purple.100}",
      },
      _disabled: {
        cursor: "not-allowed",
        bg: "gray.100",
        color: "gray.400",
        borderColor: "gray.200",
      },
      '&[type="number"]': {
        MozAppearance: "textfield",
        "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: "0",
        },
      },
      '&[type="password"]': {
        "&::-ms-reveal, &::-ms-clear": { display: "none" },
      },
    },
    errorMessage: {
      fontSize: "bodySm",
      color: "danger.500",
    },
  },
  variants: {
    size: {
      sm: { field: { fontSize: "bodySm", paddingY: "1.5" } },
      md: { field: { fontSize: "body", paddingY: "2" } },
      lg: { field: { fontSize: "bodyLg", paddingY: "2.5" } },
    },
    invalid: {
      true: {
        field: {
          borderColor: "danger.500",
          _focus: {
            borderColor: "danger.500",
            boxShadow: "0 0 0 3px {colors.danger.50}",
          },
        },
      },
    },
  },
  defaultVariants: { size: "md" },
});
