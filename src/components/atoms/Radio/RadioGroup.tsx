// src/components/atoms/Radio/RadioGroup.tsx
import type { ReactNode } from "react";
import { RadioGroupContext } from "./RadioGroup.context";
import { css } from "styled-system/css";

export interface RadioGroupProps {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  label?: string;
  disabled?: boolean;
  children: ReactNode;
}

export function RadioGroup({
  name,
  value,
  onChange,
  label,
  disabled,
  children,
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider
      value={{
        name,
        value,
        onChange: (v) => onChange?.(v),
        disabled,
      }}
    >
      <fieldset
        className={css({
          border: "none",
          padding: "0",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          gap: "2",
        })}
        disabled={disabled}
      >
        {label && (
          <legend
            className={css({
              fontFamily: "body",
              fontSize: "bodySm",
              fontWeight: "medium",
              color: "gray.700",
              marginBottom: "1",
              float: "left",
              width: "full",
            })}
          >
            {label}
          </legend>
        )}
        {children}
      </fieldset>
    </RadioGroupContext.Provider>
  );
}
