import { useEffect } from "react";
import { useSelect } from "./Select.context";
import { select } from "styled-system/recipes";

export interface SelectOptionProps {
  value: string;
  label: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

export function SelectOption({
  value,
  label,
  disabled,
  size,
}: SelectOptionProps) {
  const { selectedValue, onSelect, registerOption } = useSelect();
  const styles = select({ size });
  const isSelected = selectedValue === value;

  useEffect(() => {
    registerOption(value, label);
  }, [value, label, registerOption]);

  return (
    <li
      role="option"
      aria-selected={isSelected}
      aria-disabled={disabled}
      data-selected={isSelected || undefined}
      data-disabled={disabled || undefined}
      className={styles.option}
      onClick={() => {
        if (!disabled) onSelect(value);
      }}
      onMouseEnter={(e) => e.currentTarget.setAttribute("data-highlighted", "")}
      onMouseLeave={(e) => e.currentTarget.removeAttribute("data-highlighted")}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && !disabled) {
          onSelect(value);
        }
      }}
    >
      <span>{label}</span>
      {isSelected && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 7L5.5 10.5L12 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </li>
  );
}
