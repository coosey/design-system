import { useCallback, useState, type ReactNode } from "react";
import { ToastContainer } from "./ToastContainer";
import { ToastContext, type ToastItem } from "./ToastContext";

export interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const add = useCallback(
    (toast: Omit<ToastItem, "id">) => {
      const id = crypto.randomUUID();
      setToasts((prev) => [...prev, { ...toast, id }]);

      if (toast.duration !== undefined) {
        setTimeout(() => remove(id), toast.duration);
      }
    },
    [remove],
  );

  return (
    <ToastContext.Provider value={{ toasts, add, remove }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}
