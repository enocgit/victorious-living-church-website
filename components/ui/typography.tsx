import { FC, HTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ElementTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "body3";

type TypographyProps = HTMLProps<HTMLParagraphElement> & {
  variant?: TypographyVariant;
  component?: ElementTypes;
} & (
    | { text: string; children?: never }
    | { children: ReactNode; text?: never }
  );

const variantClasses: Record<TypographyVariant, string> = {
  h1: "text-6xl font-bold tracking-tighter lg:text-8xl",
  h2: "text-4xl font-bold tracking-tight lg:text-5xl",
  h3: "text-3xl font-bold tracking-tight lg:text-4xl",
  h4: "font-bold text-3xl",
  h5: "font-bold text-xl",
  h6: "font-bold text-sm",
  body1: "text-base",
  body2: "text-sm",
  body3: "text-xs",
};

export const Typography: FC<TypographyProps> = ({
  variant = "body1",
  component,
  children,
  text,
  className,
  ...rest
}) => {
  if ((text && children) || (!text && !children)) {
    throw new Error(
      "[Typography]: You must pass either 'text' or 'children', and not both",
    );
  }

  const isHeading =
    variant === "h1" ||
    variant === "h2" ||
    variant === "h3" ||
    variant === "h4" ||
    variant === "h5" ||
    variant === "h6";

  const classes = variantClasses[variant] || "";
  const finalClasses = twMerge(classes, className);

  const ValidComponent = component || (isHeading ? variant : "p");

  return (
    <ValidComponent className={finalClasses} {...rest}>
      {text ?? children}
    </ValidComponent>
  );
};
