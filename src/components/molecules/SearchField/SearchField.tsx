import {
  useRef,
  useState,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from "react";
import { cx } from "styled-system/css";
import {
  searchField,
  type SearchFieldVariantProps,
} from "styled-system/recipes";
import { Icon } from "../../atoms/Icon/Icon";
import { Spinner } from "../../atoms/Spinner/Spinner";

export interface SearchFieldProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "type" | "value" | "defaultValue" | "onChange"
    >,
    Omit<SearchFieldVariantProps, "invalid"> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  invalid?: boolean;
  loading?: boolean;
  clearLabel?: string;
}

export function SearchField({
  value,
  defaultValue = "",
  onChange,
  onSearch,
  onClear,
  size,
  invalid,
  loading,
  disabled,
  clearLabel = "Clear search",
  placeholder = "Search",
  className,
  onKeyDown,
  ...rest
}: SearchFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const isInvalid = invalid ?? rest["aria-invalid"] === true;

  const styles = searchField({ size, invalid: isInvalid });

  // map field size to icon/spinner size
  const iconSize = size === "lg" ? "md" : "sm";
  const spinnerSize = size === "lg" ? "sm" : "xs";

  const updateValue = (next: string) => {
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  const handleClear = () => {
    updateValue("");
    onClear?.();
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;

    if (event.key === "Enter") {
      onSearch?.(currentValue);
    } else if (event.key === "Escape" && currentValue) {
      event.preventDefault();
      handleClear();
    }
  };

  const showClear = Boolean(currentValue) && !disabled && !loading;

  return (
    <div className={styles.root}>
      <Icon name="search" size={iconSize} className={styles.searchIcon} />
      <input
        ref={inputRef}
        type="search"
        className={cx(styles.field, className)}
        value={currentValue}
        onChange={(event) => updateValue(event.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={isInvalid || undefined}
        aria-busy={loading || undefined}
        {...rest}
      />
      <div className={styles.trailing}>
        {loading && <Spinner size={spinnerSize} color="muted" />}
        {showClear && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            aria-label={clearLabel}
          >
            <Icon name="close" size={iconSize} />
          </button>
        )}
      </div>
    </div>
  );
}
