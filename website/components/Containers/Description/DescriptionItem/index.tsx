// components/ui/DescriptionItem.tsx
import { cn } from '@utils'
import * as React from 'react'

interface DescriptionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const DescriptionItem = React.forwardRef<HTMLDivElement, DescriptionItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'px-4 bg-layout-main rounded-full min-h-[48px] text-center flex justify-center items-center font-semibold leading-[1.3125] text-ds-gray-900 tracking-[-0.05em] shadow-[0_0_0_1px_rgba(255,255,255,0.14)]',
          className
        )}
        style={{ fontSize: 'clamp(1rem, 0.714rem + 1.43vw, 2rem)' }}
        {...props}
      >
        {children}
      </div>
    )
  }
)

DescriptionItem.displayName = 'DescriptionItem'

export default DescriptionItem