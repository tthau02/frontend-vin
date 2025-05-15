import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simple date formatting function to replace date-fns
export function formatDate(date: Date, format: string = 'd thg M'): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  return format
    .replace('d', day.toString())
    .replace('M', month.toString())
    .replace('yyyy', year.toString());
}
