import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalizeFirstChar = (string: string): string => {
  return string.charAt(0).toLocaleUpperCase() + string.slice(1);
};
