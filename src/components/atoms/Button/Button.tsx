import type { ButtonHTMLAttributes } from "react";
import { button, type ButtonVariantProps } from "styled-system/recipes";
import { cx } from "styled-system/css";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {}

export function Button({
  variant,
  size,
  borderRadius,
  className,
  onClick,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cx(
        button({ variant, size, borderRadius, disabled }),
        className,
      )}
      onClick={disabled ? undefined : onClick}
      {...rest}
    />
  );
}
