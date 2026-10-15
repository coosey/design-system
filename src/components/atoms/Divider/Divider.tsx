import type { HTMLAttributes } from "react";
import { css, cx } from "styled-system/css";
import { separator, type SeparatorVariantProps } from "styled-system/recipes";

export interface DividerProps
  extends Omit<HTMLAttributes<HTMLElement>, keyof SeparatorVariantProps>,
    SeparatorVariantProps {
  label?: string;
}

export function Divider({
  orientation = "horizontal",
  variant,
  spacing,
  label,
  className,
  ...rest
}: DividerProps) {
  if (label && orientation === "horizontal") {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cx(
          css({
            display: "flex",
            alignItems: "center",
            gap: "3",
            width: "full",
            marginY:
              spacing === "sm"
                ? "2"
                : spacing === "lg"
                  ? "6"
                  : spacing === "none"
                    ? "0"
                    : "4",
          }),
          className,
        )}
        {...rest}
      >
        <span
          className={separator({ orientation, variant, spacing: "none" })}
          style={{ flex: 1 }}
        />
        <span
          className={css({
            fontFamily: "body",
            fontSize: "bodySm",
            color: "gray.500",
            flexShrink: "0",
          })}
        >
          {label}
        </span>
        <span
          className={separator({ orientation, variant, spacing: "none" })}
          style={{ flex: 1 }}
        />
      </div>
    );
  }

  return (
    <hr
      role="separator"
      aria-orientation={orientation ?? "horizontal"}
      className={cx(separator({ orientation, variant, spacing }), className)}
      {...rest}
    />
  );
}
