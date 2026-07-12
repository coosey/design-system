import { cloneElement, type HTMLAttributes } from "react";
import { cva, cx, type RecipeVariantProps } from "styled-system/css";
import { getIcon, type IconName } from "./Icons";

const iconStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
  },
  variants: {
    size: {
      xs: { width: "3", height: "3" },
      sm: { width: "4", height: "4" },
      md: { width: "5", height: "5" },
      lg: { width: "6", height: "6" },
      xl: { width: "8", height: "8" },
    },
    color: {
      inherit: {},
      primary: { color: "purple.500" },
      secondary: { color: "pink.400" },
      muted: { color: "gray.400" },
      subtle: { color: "gray.300" },
      success: { color: "success.500" },
      danger: { color: "danger.500" },
      warning: { color: "warning.500" },
      white: { color: "white" },
    },
  },
  defaultVariants: {
    size: "md",
    color: "inherit",
  },
});

type IconVariantProps = RecipeVariantProps<typeof iconStyles>;

export type IconProps = HTMLAttributes<HTMLSpanElement> &
  IconVariantProps & {
  name: IconName;
  label?: string; // if provided, icon is announced to screen readers
};

export function Icon({
  name,
  size,
  color,
  label,
  className,
  ...rest
}: IconProps) {
  const svgElement = getIcon(name);

  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={!label}
      className={cx(iconStyles({ size, color }), className)}
      {...rest}
    >
      {cloneElement(svgElement, {
        width: "100%",
        height: "100%",
        "aria-hidden": true,
        focusable: false, // prevents IE/Edge from focusing SVGs
      })}
    </span>
  );
}
