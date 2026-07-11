import {
  FloatingFocusManager,
  FloatingOverlay,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { type ReactNode, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { modal, type ModalVariantProps } from "styled-system/recipes";
import { ModalContext } from "./Modal.context";

export interface ModalProps extends ModalVariantProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  size,
  padding,
  children,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: ModalProps) {
  const styles = modal({ size, padding });

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      if (!open) onClose();
    },
  });

  const setFloating = useCallback(
    (node: HTMLDivElement | null) => {
      refs.setFloating(node);
    },
    [refs],
  );

  const dismiss = useDismiss(context, {
    outsidePress: closeOnOverlayClick,
    escapeKey: closeOnEscape,
  });

  const role = useRole(context, { role: "dialog" });
  const { getFloatingProps } = useInteractions([dismiss, role]);

  // scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <ModalContext.Provider value={{ onClose, styles }}>
      <FloatingOverlay className={styles.overlay} lockScroll>
        <FloatingFocusManager context={context}>
          <div
            ref={setFloating}
            className={styles.content}
            {...getFloatingProps()}
          >
            {children}
          </div>
        </FloatingFocusManager>
      </FloatingOverlay>
    </ModalContext.Provider>,
    document.body,
  );
}
