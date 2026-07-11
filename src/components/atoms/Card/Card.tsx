/* eslint-disable @typescript-eslint/no-empty-object-type */
import { type HTMLAttributes } from "react";
import { card, type CardVariantProps } from "styled-system/recipes";
import { cx } from "styled-system/css";
import { createContext, useContext } from "react";

interface CardContextValue {
  styles: ReturnType<typeof card>;
}

const CardContext = createContext<CardContextValue | null>(null);

function useCardContext() {
  const ctx = useContext(CardContext);
  if (!ctx) throw new Error("Card slot components must be used within <Card>");
  return ctx;
}

/** Root */
export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    CardVariantProps {}

export function Card({
  variant,
  size,
  className,
  children,
  ...rest
}: CardProps) {
  const styles = card({ variant, size });

  return (
    <CardContext.Provider value={{ styles }}>
      <div className={cx(styles.root, className)} {...rest}>
        {children}
      </div>
    </CardContext.Provider>
  );
}

/** Header */
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, children, ...rest }: CardHeaderProps) {
  const { styles } = useCardContext();
  return (
    <div className={cx(styles.header, className)} {...rest}>
      {children}
    </div>
  );
}

/** Body */
export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export function CardBody({ className, children, ...rest }: CardBodyProps) {
  const { styles } = useCardContext();
  return (
    <div className={cx(styles.body, className)} {...rest}>
      {children}
    </div>
  );
}

/** Footer */
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, children, ...rest }: CardFooterProps) {
  const { styles } = useCardContext();
  return (
    <div className={cx(styles.footer, className)} {...rest}>
      {children}
    </div>
  );
}
