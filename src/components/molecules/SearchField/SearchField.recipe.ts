import { defineSlotRecipe } from "@pandacss/dev";

export const searchFieldRecipe = defineSlotRecipe({
  className: "searchField",
  slots: ["root", "searchIcon", "field", "trailing", "clearButton"],
  base: {
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "full",
      fontFamily: "body",
    },
    searchIcon: {
      position: "absolute",
      left: "3",
      color: "gray.400",
      pointerEvents: "none",
    },
    field: {
      width: "full",
      fontFamily: "body",
      fontSize: "body",
      border: "1px solid",
      borderColor: "gray.300",
      borderRadius: "md",
      paddingY: "2",
      paddingLeft: "9",
      paddingRight: "9",
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
      // hide native search decorations; we render our own clear button
      "&::-webkit-search-cancel-button, &::-webkit-search-decoration": {
        WebkitAppearance: "none",
      },
    },
    trailing: {
      position: "absolute",
      right: "2",
      display: "flex",
      alignItems: "center",
    },
    clearButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1",
      borderRadius: "sm",
      color: "gray.400",
      cursor: "pointer",
      bg: "transparent",
      border: "none",
      transition: "color 0.15s ease, background-color 0.15s ease",
      _hover: { color: "gray.700", bg: "gray.100" },
      _focusVisible: {
        outline: "none",
        boxShadow: "0 0 0 2px {colors.purple.500}",
      },
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
