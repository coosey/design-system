import type { HTMLAttributes } from "react";
import { cx } from "styled-system/css";
import { useModal } from "./Modal.context";
import { Text } from "../Text/Text";

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean;
}

export function ModalHeader({
  showCloseButton = true,
  className,
  children,
  ...rest
}: ModalHeaderProps) {
  const { onClose, styles } = useModal();

  return (
    <div className={cx(styles.header, className)} {...rest}>
      {typeof children === "string" ? (
        <Text variant="h3">{children}</Text>
      ) : (
        children
      )}
      {showCloseButton && (
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 3L13 13M13 3L3 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
