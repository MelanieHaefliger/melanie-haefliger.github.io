import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names, resolving Tailwind conflicts last-wins. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Base path for the deployment (e.g. "/portfolio" on GitHub Pages, "" locally). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public asset/file path with the base path. Use for raw <img>/<a>. */
export function asset(path: string) {
  return `${basePath}${path}`;
}
