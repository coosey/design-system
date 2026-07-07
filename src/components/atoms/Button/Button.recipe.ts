import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "body",
    fontWeight: "medium",
    borderRadius: "md",
    cursor: "pointer",
    border: "1px solid transparent",
    transition: "background 0.15s ease, border-color 0.15s ease",
  },
  variants: {
    variant: {
      primary: {
        bg: "purple.500",
        color: "white",
        borderColor: "purple.500",
        _hover: { bg: "purple.600", borderColor: "purple.600" },
      },
      secondary: {
        bg: "pink.400",
        color: "white",
        borderColor: "pink.400",
        _hover: { bg: "pink.500", borderColor: "pink.500" },
      },
      ghost: {
        bg: "transparent",
        color: "purple.500",
        borderColor: "purple.500",
        _hover: { bg: "purple.50" },
      },
      danger: {
        bg: "red.500",
        color: "white",
        borderColor: "red.500",
        _hover: { bg: "red.600", borderColor: "red.600" },
      },
    },
    size: {
      sm: { fontSize: "sm", paddingX: "3", paddingY: "1.5" },
      md: { fontSize: "md", paddingX: "4", paddingY: "2" },
      lg: { fontSize: "lg", paddingX: "5", paddingY: "3" },
    },
    borderRadius: {
      sm: { borderRadius: "sm" },
      md: { borderRadius: "md" },
      lg: { borderRadius: "lg" },
    },
    disabled: {
      true: {
        bg: "gray.200",
        color: "gray.500",
        borderColor: "gray.300",
        cursor: "not-allowed",
        _hover: { bg: "gray.200", borderColor: "gray.300" },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    borderRadius: "md",
  },
});
