import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  type Placement,
} from "@floating-ui/react";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { cx } from "styled-system/css";
import { tooltip, type TooltipVariantProps } from "styled-system/recipes";

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLElement>, keyof TooltipVariantProps>,
    TooltipVariantProps {
  label: string;
  children: ReactNode;
  placement?: Placement;
  delay?: number;
  disabled?: boolean;
}

export function Tooltip({
  label,
  children,
  placement = "top",
  delay = 300,
  disabled = false,
  theme,
  className,
}: TooltipProps) {
  "use no memo";

  const [isOpen, setIsOpen] = useState(false);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const styles = tooltip({ theme });

  const middleware = useMemo(
    () => [
      offset(8),
      flip(),
      shift({ padding: 8 }),
      arrow({ element: arrowElement }),
    ],
    [arrowElement],
  );

  const {
    refs,
    floatingStyles,
    context,
    middlewareData,
    placement: resolvedPlacement,
    update,
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    strategy: "fixed",
    middleware,
    whileElementsMounted: autoUpdate,
  });

  const setReference = useCallback(
    (node: HTMLSpanElement | null) => {
      refs.setReference(node);
    },
    [refs],
  );

  const setFloating = useCallback(
    (node: HTMLDivElement | null) => {
      refs.setFloating(node);
    },
    [refs],
  );

  // force recalculation when tooltip opens
  useEffect(() => {
    if (isOpen) update();
  }, [isOpen, update]);

  const hover = useHover(context, {
    enabled: !disabled,
    delay: { open: delay, close: 0 },
  });
  const focus = useFocus(context, { enabled: !disabled });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const arrowX = middlewareData.arrow?.x;
  const arrowY = middlewareData.arrow?.y;
  const staticSide = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  }[resolvedPlacement.split("-")[0]] as string;

  return (
    <>
      <span
        ref={setReference}
        style={{ display: "inline-flex" }}
        {...getReferenceProps()}
      >
        {children}
      </span>
      {createPortal(
        <div
          ref={setFloating}
          style={{
            ...floatingStyles,
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
            visibility: isOpen ? "visible" : "hidden",
            transition: "opacity 0.15s ease, transform 0.15s ease",
            transform:
              `${floatingStyles.transform ?? ""} ${isOpen ? "scale(1)" : "scale(0.95)"}`.trim(),
          }}
          className={cx(styles.content, className)}
          {...getFloatingProps()}
        >
          {label}
          <div
            ref={setArrowElement}
            className={styles.arrow}
            style={{
              left: arrowX != null ? `${arrowX}px` : "",
              top: arrowY != null ? `${arrowY}px` : "",
              right: "",
              bottom: "",
              ...(staticSide ? { [staticSide]: "-4px" } : {}),
            }}
          />
        </div>,
        document.body,
      )}
    </>
  );
}
