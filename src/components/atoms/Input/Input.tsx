import { useId, type InputHTMLAttributes } from "react";
import { input, type InputVariantProps } from "styled-system/recipes";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariantProps {
  label?: string;
  errorMessage?: string;
}

export function Input({
  label,
  errorMessage,
  size,
  invalid,
  id,
  className,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const isInvalid = invalid ?? Boolean(errorMessage);
  const styles = input({ size, invalid: isInvalid });

  return (
    <div className={styles.root}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`${styles.field} ${className ?? ""}`.trim()}
        aria-invalid={isInvalid}
        aria-describedby={errorMessage ? `${inputId}-error` : undefined}
        {...rest}
      />
      {errorMessage && (
        <span id={`${inputId}-error`} className={styles.errorMessage}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}
