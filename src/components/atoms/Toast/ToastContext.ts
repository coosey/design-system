import { createContext, useContext } from "react";

export type ToastStatus = "success" | "error" | "warning" | "info";

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  status: ToastStatus;
  duration?: number; // ms, undefined = persistent
}

export interface ToastContextValue {
  toasts: ToastItem[];
  add: (toast: Omit<ToastItem, "id">) => void;
  remove: (id: string) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

export function useToastContext() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}
