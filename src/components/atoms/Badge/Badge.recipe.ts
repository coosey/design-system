import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
  className: "badge",
  staticCss: ["*"],
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1",
    fontFamily: "body",
    fontWeight: "medium",
    lineHeight: "1",
    whiteSpace: "nowrap",
    borderRadius: "full",
    border: "1px solid transparent",
    flexShrink: "0",
  },
  variants: {
    variant: {
      solid: {},
      subtle: {},
      outline: { bg: "transparent" },
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      danger: {},
      warning: {},
      gray: {},
    },
    size: {
      sm: { fontSize: "caption", paddingX: "1.5", paddingY: "0.5" },
      md: { fontSize: "bodySm", paddingX: "2", paddingY: "1" },
      lg: { fontSize: "body", paddingX: "2.5", paddingY: "1" },
    },
    count: {
      true: {
        borderRadius: "full",
        minWidth: "5",
        height: "5",
        paddingX: "1",
        fontSize: "caption",
        fontWeight: "bold",
      },
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "primary",
      css: { bg: "purple.500", color: "white", borderColor: "purple.500" },
    },
    {
      variant: "solid",
      color: "secondary",
      css: { bg: "pink.400", color: "white", borderColor: "pink.400" },
    },
    {
      variant: "solid",
      color: "success",
      css: { bg: "success.500", color: "white", borderColor: "success.500" },
    },
    {
      variant: "solid",
      color: "danger",
      css: { bg: "danger.500", color: "white", borderColor: "danger.500" },
    },
    {
      variant: "solid",
      color: "warning",
      css: { bg: "warning.500", color: "white", borderColor: "warning.500" },
    },
    {
      variant: "solid",
      color: "gray",
      css: { bg: "gray.600", color: "white", borderColor: "gray.600" },
    },
    {
      variant: "subtle",
      color: "primary",
      css: { bg: "purple.50", color: "purple.700", borderColor: "purple.50" },
    },
    {
      variant: "subtle",
      color: "secondary",
      css: { bg: "pink.50", color: "pink.700", borderColor: "pink.50" },
    },
    {
      variant: "subtle",
      color: "success",
      css: {
        bg: "success.50",
        color: "success.700",
        borderColor: "success.50",
      },
    },
    {
      variant: "subtle",
      color: "danger",
      css: { bg: "danger.50", color: "danger.700", borderColor: "danger.50" },
    },
    {
      variant: "subtle",
      color: "warning",
      css: {
        bg: "warning.50",
        color: "warning.700",
        borderColor: "warning.50",
      },
    },
    {
      variant: "subtle",
      color: "gray",
      css: { bg: "gray.100", color: "gray.700", borderColor: "gray.100" },
    },
    {
      variant: "outline",
      color: "primary",
      css: { color: "purple.600", borderColor: "purple.500" },
    },
    {
      variant: "outline",
      color: "secondary",
      css: { color: "pink.600", borderColor: "pink.400" },
    },
    {
      variant: "outline",
      color: "success",
      css: { color: "success.700", borderColor: "success.500" },
    },
    {
      variant: "outline",
      color: "danger",
      css: { color: "danger.700", borderColor: "danger.500" },
    },
    {
      variant: "outline",
      color: "warning",
      css: { color: "warning.700", borderColor: "warning.500" },
    },
    {
      variant: "outline",
      color: "gray",
      css: { color: "gray.700", borderColor: "gray.400" },
    },
  ],
  defaultVariants: { variant: "subtle", color: "primary", size: "md" },
});
