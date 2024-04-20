import * as React from 'react'
import { cn } from '@utils'

interface GreetingItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const GreetingItem = React.forwardRef<HTMLDivElement, GreetingItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'text-center font-semibold text-ds-gray-900 tracking-[-0.05em] leading-[1.3125]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GreetingItem.displayName = 'GreetingItem'

export default GreetingItem