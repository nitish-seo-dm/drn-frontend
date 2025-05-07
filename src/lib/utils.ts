import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines class names using clsx + tailwind-merge for conflict-safe merging.
 * Usage: cn('bg-red-500', condition && 'p-4', 'text-white')
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
