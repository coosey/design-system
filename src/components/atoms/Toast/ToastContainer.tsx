import { createPortal } from "react-dom";
import { toast as toastRecipeFn } from "styled-system/recipes";
import { Toast } from "./Toast";
import { useToastContext } from "./ToastContext";

export function ToastContainer() {
  const { toasts, remove } = useToastContext();
  const styles = toastRecipeFn({});

  if (toasts.length === 0) return null;

  return createPortal(
    <div
      className={styles.container}
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} onRemove={remove} />
      ))}
    </div>,
    document.body,
  );
}
