import type { HTMLAttributes } from "react";
import { cx } from "styled-system/css";
import { spinner, type SpinnerVariantProps } from "styled-system/recipes";

export interface SpinnerProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, keyof SpinnerVariantProps>,
    SpinnerVariantProps {
  label?: string;
}

export function Spinner({
  size,
  color,
  label = "Loading",
  className,
  ...rest
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cx(spinner({ size, color }), className)}
      {...rest}
    >
      {/* visually hidden text for screen readers */}
      <span
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          borderWidth: "0",
        }}
      >
        {label}
      </span>
    </span>
  );
}
