import { useCallback } from "react";
import { useToastContext, type ToastStatus } from "./ToastContext";

interface ToastOptions {
  description?: string;
  duration?: number;
}

export function useToast() {
  const { add } = useToastContext();

  const show = useCallback(
    (status: ToastStatus, title: string, options: ToastOptions = {}) => {
      add({ status, title, duration: 4000, ...options });
    },
    [add],
  );

  return {
    success: (title: string, options?: ToastOptions) =>
      show("success", title, options),
    error: (title: string, options?: ToastOptions) =>
      show("error", title, options),
    warning: (title: string, options?: ToastOptions) =>
      show("warning", title, options),
    info: (title: string, options?: ToastOptions) =>
      show("info", title, options),
    // persistent toast — no auto-dismiss
    persistent: (status: ToastStatus, title: string, options?: ToastOptions) =>
      show(status, title, { ...options, duration: undefined }),
  };
}
