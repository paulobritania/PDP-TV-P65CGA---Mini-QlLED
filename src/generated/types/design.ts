export interface DesignToken {
  name: string
  value: string
  category: 'color' | 'spacing' | 'typography' | 'shadow'
}

export interface ComponentProps {
  variant?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
}
