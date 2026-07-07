import { defineTokens } from "@pandacss/dev";

const colors = defineTokens.colors({
  purple: {
    50: { value: "#F5F3FF" },
    100: { value: "#EDE9FE" },
    200: { value: "#DDD6FE" },
    300: { value: "#C4B5FD" },
    400: { value: "#A78BFA" },
    500: { value: "#8B5CF6" },
    600: { value: "#7C3AED" },
    700: { value: "#6D28D9" },
    800: { value: "#5B21B6" },
    900: { value: "#4C1D95" },
  },
  pink: {
    50: { value: "#FDF2F8" },
    100: { value: "#FCE7F3" },
    200: { value: "#FBCFE8" },
    300: { value: "#F9A8D4" },
    400: { value: "#F472B6" },
    500: { value: "#EC4899" },
    600: { value: "#DB2777" },
    700: { value: "#BE185D" },
    800: { value: "#9D174D" },
    900: { value: "#831843" },
  },
  mint: {
    50: { value: "#ECFDF5" },
    100: { value: "#D1FAE5" },
    200: { value: "#A7F3D0" },
    300: { value: "#6EE7B7" },
    400: { value: "#34D399" },
    500: { value: "#10B981" },
    600: { value: "#059669" },
    700: { value: "#047857" },
    800: { value: "#065F46" },
    900: { value: "#064E3B" },
  },
  gray: {
    50: { value: "#FAFAF9" },
    100: { value: "#F5F5F4" },
    200: { value: "#E7E5E4" },
    300: { value: "#D6D3D1" },
    400: { value: "#A8A29E" },
    500: { value: "#78716C" },
    600: { value: "#57534E" },
    700: { value: "#44403C" },
    800: { value: "#292524" },
    900: { value: "#1C1917" },
  },
  success: {
    50: { value: "#F0FDF4" },
    500: { value: "#22C55E" },
    700: { value: "#15803D" },
  },
  warning: {
    50: { value: "#FFFBEB" },
    500: { value: "#F59E0B" },
    700: { value: "#B45309" },
  },
  danger: {
    50: { value: "#FEF2F2" },
    500: { value: "#EF4444" },
    700: { value: "#B91C1C" },
  },
});

export { colors };
