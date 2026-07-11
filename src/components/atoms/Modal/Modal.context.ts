import { createContext, useContext } from "react";

interface ModalContextValue {
  onClose: () => void;
  styles: Record<string, string>;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx)
    throw new Error("Modal slot components must be used within <Modal>");
  return ctx;
}
