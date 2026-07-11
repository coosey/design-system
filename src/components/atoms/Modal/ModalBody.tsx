/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { HTMLAttributes } from "react";
import { cx } from "styled-system/css";
import { useModal } from "./Modal.context";

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {}

export function ModalBody({ className, children, ...rest }: ModalBodyProps) {
  const { styles } = useModal();
  return (
    <div className={cx(styles.body, className)} {...rest}>
      {children}
    </div>
  );
}
