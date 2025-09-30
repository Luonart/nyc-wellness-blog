import { ReactNode } from 'react'

interface ProseProps {
  children: ReactNode
  className?: string
}

export default function Prose({ children, className = '' }: ProseProps) {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {children}
    </div>
  )
}
