import { createElement, type ElementType, type HTMLAttributes } from "react";
import { cx } from "styled-system/css";
import { text, type TextVariantProps } from "styled-system/recipes";

const defaultElementMap = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  bodyLg: "p",
  body: "p",
  bodySm: "p",
  caption: "span",
} as const;

type TextVariant = keyof typeof defaultElementMap;

export interface TextProps
  extends Omit<HTMLAttributes<HTMLElement>, "color">,
    Omit<TextVariantProps, "variant"> {
  variant?: TextVariant;
  as?: ElementType;
}

export function Text({
  as,
  variant = "body",
  color,
  align,
  truncate,
  className,
  children,
  ...rest
}: TextProps) {
  const element = as ?? defaultElementMap[variant] ?? "span";
  const styles = text({ variant, color, align, truncate });

  return createElement(
    element,
    { className: cx(styles, className), ...rest },
    children,
  );
}
