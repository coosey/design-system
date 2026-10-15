// SelectTrigger.tsx
import { select, type SelectVariantProps } from "styled-system/recipes";
import { useSelect } from "./Select.context";

export interface SelectTriggerProps extends SelectVariantProps {
  placeholder?: string;
  id?: string;
}

export function SelectTrigger({
  placeholder,
  size,
  id,
  ...rest
}: SelectTriggerProps) {
  const {
    isOpen,
    selectedLabel,
    disabled,
    invalid,
    triggerId,
    contentId,
    triggerRef,
    getReferenceProps,
  } = useSelect();

  const resolvedId = id ?? triggerId;

  const styles = select({ size });

  return (
    <button
      id={resolvedId}
      ref={triggerRef}
      type="button"
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={contentId}
      aria-invalid={invalid}
      disabled={disabled}
      data-open={isOpen || undefined}
      data-invalid={invalid || undefined}
      data-disabled={disabled || undefined}
      className={styles.trigger}
      {...getReferenceProps()}
      {...rest}
    >
      <span className={selectedLabel ? styles.value : styles.placeholder}>
        {selectedLabel ?? placeholder ?? "Select an option"}
      </span>
      <svg
        className={styles.icon}
        data-open={isOpen || undefined}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
