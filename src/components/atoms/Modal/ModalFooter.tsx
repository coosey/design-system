/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { HTMLAttributes } from "react";
import { cx } from "styled-system/css";
import { useModal } from "./Modal.context";

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function ModalFooter({
  className,
  children,
  ...rest
}: ModalFooterProps) {
  const { styles } = useModal();
  return (
    <div className={cx(styles.footer, className)} {...rest}>
      {children}
    </div>
  );
}
