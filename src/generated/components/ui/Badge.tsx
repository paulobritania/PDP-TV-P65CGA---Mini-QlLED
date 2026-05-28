'use client'
import { HTMLAttributes } from 'react'
import { cn } from '@/generated/utils/tailwind'
export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}
export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variantStyles = {
    default: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    destructive: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    outline: 'border border-gray-300 text-gray-800 dark:border-gray-600 dark:text-gray-200',
  }
  return (
    <div
      className={cn('inline-flex items-center rounded-full px-3 py-1 text-sm font-medium', variantStyles[variant], className)}
      {...props}
    />
  )
}
