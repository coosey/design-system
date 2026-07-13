import type { HTMLAttributes } from "react";
import { cx } from "styled-system/css";
import { badge, type BadgeVariantProps } from "styled-system/recipes";
import { Icon } from "../Icon/Icon";
import { type IconName } from "../Icon/Icons";

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color">,
    BadgeVariantProps {
  icon?: IconName;
  dot?: boolean;
}

export function Badge({
  variant,
  color = "primary",
  size,
  count,
  icon,
  dot,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cx(badge({ variant, color, size, count }), className)}
      {...rest}
    >
      {/* status dot */}
      {dot && !count && (
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "currentColor",
            flexShrink: 0,
          }}
        />
      )}
      {/* leading icon */}
      {icon && !count && !dot && <Icon name={icon} size="xs" color="inherit" />}
      {children}
    </span>
  );
}
