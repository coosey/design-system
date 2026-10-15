import { useEffect, useRef, type ReactNode } from "react";
import { select, type SelectVariantProps } from "styled-system/recipes";
import { useSelect } from "./Select.context";

export interface SelectContentProps {
  children: ReactNode;
  size?: SelectVariantProps["size"];
}

export function SelectContent({ children, size }: SelectContentProps) {
  const {
    isOpen,
    contentId,
    triggerId,
    floatingRef,
    floatingStyles,
    getFloatingProps,
  } = useSelect();

  const styles = select({ size });
  const ref = useRef<HTMLUListElement>(null);

  // focus the list when it opens for keyboard nav
  useEffect(() => {
    if (isOpen) ref.current?.focus();
  }, [isOpen]);

  return (
    <ul
      ref={(node) => {
        (ref as React.RefObject<HTMLUListElement | null>).current = node;
        floatingRef(node);
      }}
      id={contentId}
      role="listbox"
      aria-labelledby={triggerId}
      tabIndex={-1}
      hidden={!isOpen}
      className={styles.content}
      style={{
        ...floatingStyles,
        display: isOpen ? undefined : "none",
      }}
      {...getFloatingProps()}
    >
      {children}
    </ul>
  );
}
