import { useId, useState, type ReactNode } from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useInteractions,
  flip,
  shift,
  offset,
  size as floatingSize,
} from "@floating-ui/react";
import { SelectContext } from "./Select.context";

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  invalid?: boolean;
  children: ReactNode;
}

export function Select({
  value,
  defaultValue,
  onChange,
  disabled,
  invalid,
  children,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [optionsMap, setOptionsMap] = useState<Record<string, string>>({});
  const triggerId = useId();
  const contentId = useId();

  const controlled = value !== undefined;
  const resolvedValue = controlled ? value : internalValue;
  const selectedLabel = resolvedValue ? optionsMap[resolvedValue] : undefined;

  // floating ui setup
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      if (disabled) return;
      setIsOpen(open);
    },
    placement: "bottom-start",
    middleware: [
      offset(4),
      flip(),
      shift(),
      floatingSize({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      }),
    ],
  });

  const click = useClick(context, { enabled: !disabled });
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  function registerOption(val: string, label: string) {
    setOptionsMap((prev) => {
      if (prev[val] === label) return prev;
      return { ...prev, [val]: label };
    });
  }

  function handleSelect(val: string) {
    if (!controlled) setInternalValue(val);
    onChange?.(val);
    setIsOpen(false);
  }

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        selectedValue: resolvedValue,
        selectedLabel,
        onOpen: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
        onSelect: handleSelect,
        registerOption,
        disabled,
        invalid,
        triggerId,
        contentId,
        triggerRef: refs.setReference,
        floatingRef: refs.setFloating,
        floatingStyles,
        getReferenceProps,
        getFloatingProps,
      }}
    >
      <div>{children}</div>
    </SelectContext.Provider>
  );
}
