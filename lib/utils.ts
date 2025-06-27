import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility type to omit 'text' from props
export function omitTextProp<T extends object>(
  props: T | undefined,
): Omit<T, "text"> {
  if (!props) return {} as Omit<T, "text">;
  const rest = { ...props };
  // @ts-expect-error: 'text' may not exist on T
  delete rest.text;
  return rest;
}
