import type { ButtonHTMLAttributes } from "react";
import { cx } from "styled-system/css";
import { button, type ButtonVariantProps } from "styled-system/recipes";
import { Spinner } from "../Spinner/Spinner";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    Omit<ButtonVariantProps, "disabled"> {
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant,
  size,
  borderRadius,
  className,
  onClick,
  disabled,
  loading,
  children,
  ...rest
}: ButtonProps) {
  const isDisabled = Boolean(disabled || loading);

  // map button size to spinner size
  const spinnerSize = size === "lg" ? "md" : size === "sm" ? "xs" : "sm";

  // spinner color based on variant
  const spinnerColor = variant === "ghost" ? "primary" : "white";
  return (
    <button
      className={cx(
        button({ variant, size, borderRadius, disabled }),
        className,
      )}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      aria-busy={loading}
      {...rest}
    >
      {loading ? (
        <>
          <Spinner size={spinnerSize} color={spinnerColor} />
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
