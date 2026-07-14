import { useState, type HTMLAttributes } from "react";
import { cx } from "styled-system/css";
import { avatar, type AvatarVariantProps } from "styled-system/recipes";
import { Icon } from "../Icon/Icon";

export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, keyof AvatarVariantProps>,
    AvatarVariantProps {
  src?: string;
  alt?: string;
  name?: string;
}

// derive initials from a full name string
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0);
  return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`;
}

export function Avatar({
  src,
  alt,
  name,
  size,
  shape,
  status,
  className,
  ...rest
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const styles = avatar({ size, shape, status });
  const initials = name ? getInitials(name) : null;
  const showImage = src && !imgError;
  const ariaLabel = alt ?? name ?? "Avatar";

  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={cx(styles.root, className)}
      {...rest}
    >
      {showImage ? (
        <img
          src={src}
          alt={ariaLabel}
          className={styles.image}
          onError={() => setImgError(true)}
        />
      ) : initials ? (
        <span className={styles.fallback} aria-hidden="true">
          {initials}
        </span>
      ) : (
        <span className={styles.fallback} aria-hidden="true">
          <Icon
            name="user"
            size={size === "xs" || size === "sm" ? "sm" : "md"}
            color="inherit"
          />
        </span>
      )}
      {status && (
        <span
          className={styles.indicator}
          aria-hidden="true"
          title={status as string}
        />
      )}
    </span>
  );
}
