import { createContext, useContext } from "react";

interface SelectContextValue {
  isOpen: boolean;
  selectedValue: string | undefined;
  selectedLabel: string | undefined;
  onOpen: () => void;
  onClose: () => void;
  onSelect: (value: string) => void;
  registerOption: (value: string, label: string) => void;
  disabled?: boolean;
  invalid?: boolean;
  triggerId: string;
  contentId: string;
  // floating ui
  triggerRef: (node: HTMLElement | null) => void;
  floatingRef: (node: HTMLElement | null) => void;
  floatingStyles: React.CSSProperties;
  getReferenceProps: (
    props?: React.HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
  getFloatingProps: (
    props?: React.HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
}

export const SelectContext = createContext<SelectContextValue | null>(null);

export function useSelect() {
  const ctx = useContext(SelectContext);
  if (!ctx)
    throw new Error("Select compound components must be used within <Select>");
  return ctx;
}
