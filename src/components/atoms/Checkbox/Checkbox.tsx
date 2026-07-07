// Checkbox.tsx
import { useId, useState, type InputHTMLAttributes } from "react";
import { checkbox, type CheckboxVariantProps } from "styled-system/recipes";
import { css } from "styled-system/css";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    CheckboxVariantProps {
  label?: string;
}

export function Checkbox({
  label,
  size,
  id,
  checked,
  defaultChecked,
  onChange,
  disabled,
  ...rest
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const [isChecked, setIsChecked] = useState(defaultChecked ?? false);
  const controlled = checked !== undefined;
  const resolvedChecked = controlled ? checked : isChecked;

  const styles = checkbox({ size });

  return (
    <label
      htmlFor={inputId}
      className={styles.root}
      data-disabled={disabled || undefined}
    >
      <input
        id={inputId}
        type="checkbox"
        checked={resolvedChecked}
        disabled={disabled}
        className={css({ srOnly: true })}
        onChange={(e) => {
          if (!controlled) setIsChecked(e.target.checked);
          onChange?.(e);
        }}
        {...rest}
      />
      <span
        className={styles.control}
        data-checked={resolvedChecked || undefined}
        data-disabled={disabled || undefined}
        aria-hidden="true"
      >
        <span
          className={styles.indicator}
          data-checked={resolvedChecked || undefined}
        >
          <svg viewBox="0 0 10 8" fill="none" width="1em" height="1em">
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
      {label && (
        <span className={styles.label} data-disabled={disabled || undefined}>
          {label}
        </span>
      )}
    </label>
  );
}
