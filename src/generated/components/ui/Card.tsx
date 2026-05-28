'use client'
import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/generated/utils/tailwind'
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md dark:border-gray-700 dark:bg-gray-800',
        className
      )}
      {...props}
    />
  )
}
export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn('mb-4 border-b border-gray-200 pb-4 dark:border-gray-700', className)} {...props} />
}
export function CardTitle({ className, ...props }: CardProps) {
  return <h3 className={cn('text-xl font-bold text-gray-900 dark:text-white', className)} {...props} />
}
export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn('text-gray-700 dark:text-gray-300', className)} {...props} />
}
export function CardFooter({ className, ...props }: CardProps) {
  return <div className={cn('mt-4 border-t border-gray-200 pt-4 dark:border-gray-700', className)} {...props} />
}
