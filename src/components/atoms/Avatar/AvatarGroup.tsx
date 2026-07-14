import type { HTMLAttributes } from "react";
import { css, cx } from "styled-system/css";
import type { AvatarProps } from "./Avatar";
import { Avatar } from "./Avatar";

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  avatars: Pick<AvatarProps, "src" | "alt" | "name">[];
  max?: number;
  size?: AvatarProps["size"];
}

export function AvatarGroup({
  avatars,
  max = 4,
  size = "md",
  className,
  ...rest
}: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;

  return (
    <div
      className={cx(
        css({ display: "inline-flex", alignItems: "center" }),
        className,
      )}
      role="group"
      aria-label={`${avatars.length} avatars`}
      {...rest}
    >
      {visible.map((avatar, i) => (
        <span
          key={i}
          style={{
            marginLeft: i === 0 ? 0 : "-8px",
            zIndex: visible.length - i,
            position: "relative",
            borderRadius: "50%",
            boxShadow: "0 0 0 2px white",
            display: "inline-flex",
          }}
        >
          <Avatar {...avatar} size={size} />
        </span>
      ))}

      {overflow > 0 && (
        <span
          style={{
            marginLeft: "-8px",
            zIndex: 0,
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            boxShadow: "0 0 0 2px white",
            background: "#E7E5E4",
            color: "#44403C",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            width:
              size === "xs"
                ? 24
                : size === "sm"
                  ? 32
                  : size === "lg"
                    ? 56
                    : size === "xl"
                      ? 80
                      : 40,
            height:
              size === "xs"
                ? 24
                : size === "sm"
                  ? 32
                  : size === "lg"
                    ? 56
                    : size === "xl"
                      ? 80
                      : 40,
          }}
          aria-label={`${overflow} more`}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
}
