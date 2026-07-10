import { createElement, type HTMLAttributes, type ElementType } from "react";
import { text, type TextVariantProps } from "styled-system/recipes";
import { cx } from "styled-system/css";

const defaultElementMap: Record<
  NonNullable<TextVariantProps["variant"]>,
  ElementType
> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  bodyLg: "p",
  body: "p",
  bodySm: "p",
  caption: "span",
};

export interface TextProps
  extends HTMLAttributes<HTMLElement>,
    TextVariantProps {
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
