import { useId, type InputHTMLAttributes } from "react";
import { radio, type RadioVariantProps } from "styled-system/recipes";
import { css } from "styled-system/css";
import { useRadioGroup } from "./RadioGroup.context";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    RadioVariantProps {
  label?: string;
  value?: string;
}

export function Radio({
  label,
  size,
  id,
  value,
  disabled,
  checked,
  onChange,
  ...rest
}: RadioProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const group = useRadioGroup();
  const styles = radio({ size });

  // if inside a RadioGroup, derive checked from group value
  const resolvedChecked = group ? group.value === value : checked;
  const resolvedDisabled = disabled ?? group?.disabled;
  const resolvedName = group?.name ?? rest.name;

  return (
    <label
      htmlFor={inputId}
      className={styles.root}
      data-disabled={resolvedDisabled || undefined}
    >
      <input
        id={inputId}
        type="radio"
        value={value}
        name={resolvedName}
        checked={resolvedChecked}
        disabled={resolvedDisabled}
        className={css({ srOnly: true })}
        onChange={(e) => {
          if (group && value) group.onChange(value);
          onChange?.(e);
        }}
        {...rest}
      />
      <span
        className={styles.control}
        data-checked={resolvedChecked || undefined}
        data-disabled={resolvedDisabled || undefined}
        aria-hidden="true"
      >
        <span
          className={styles.indicator}
          data-checked={resolvedChecked || undefined}
        />
      </span>
      {label && (
        <span
          className={styles.label}
          data-disabled={resolvedDisabled || undefined}
        >
          {label}
        </span>
      )}
    </label>
  );
}
