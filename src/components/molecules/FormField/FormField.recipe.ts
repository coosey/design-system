import { defineSlotRecipe } from "@pandacss/dev";

export const formFieldRecipe = defineSlotRecipe({
  className: "formField",
  slots: [
    "root",
    "labelRow",
    "label",
    "requiredIndicator",
    "description",
    "errorMessage",
  ],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full",
    },
    labelRow: {
      display: "flex",
      alignItems: "center",
      gap: "1",
    },
    label: {
      fontFamily: "body",
      fontSize: "bodySm",
      fontWeight: "medium",
      color: "gray.700",
    },
    requiredIndicator: {
      color: "danger.500",
      fontSize: "bodySm",
    },
    description: {
      fontFamily: "body",
      fontSize: "bodySm",
      color: "gray.500",
    },
    errorMessage: {
      fontFamily: "body",
      fontSize: "bodySm",
      color: "danger.500",
    },
  },
  variants: {},
  defaultVariants: {},
});
