import { useId, type ReactNode } from "react";
import { formField } from "styled-system/recipes";

export interface FieldProps {
  id: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
}

export interface FormFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  required?: boolean;
  children: (fieldProps: FieldProps) => ReactNode;
}

export function FormField({
  label,
  description,
  errorMessage,
  required,
  children,
}: FormFieldProps) {
  const fieldId = useId();
  const descriptionId = useId();
  const errorId = useId();
  const isInvalid = Boolean(errorMessage);

  const styles = formField();

  const describedBy =
    [description ? descriptionId : null, errorMessage ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  const fieldProps: FieldProps = {
    id: fieldId,
    "aria-describedby": describedBy,
    "aria-invalid": isInvalid || undefined,
  };

  return (
    <div className={styles.root}>
      {label && (
        <div className={styles.labelRow}>
          <label htmlFor={fieldId} className={styles.label}>
            {label}
          </label>
          {required && (
            <span className={styles.requiredIndicator} aria-hidden="true">
              *
            </span>
          )}
        </div>
      )}

      {children(fieldProps)}

      {description && !errorMessage && (
        <span id={descriptionId} className={styles.description}>
          {description}
        </span>
      )}

      {errorMessage && (
        <span id={errorId} className={styles.errorMessage} role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
