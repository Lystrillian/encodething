import DescriptionList from "../DescriptionList";
import * as React from 'react'
import { cn } from '@utils'

interface DescriptionSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  items: React.ReactNode[]
}

const DescriptionSection = React.forwardRef<
  HTMLDivElement,
  DescriptionSectionProps
>(({ className, title, items, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'shadow-[0_0_0_1px_rgba(255,255,255,0.14)]',
        className
      )}
      {...props}
    >
      <h2
        className="text-center font-semibold text-ds-gray-900 tracking-[-0.05em]"
        style={{ fontSize: 'clamp(1.5rem, 1.357rem + 0.71vw, 2.25rem)' }}
      >
        {title}
      </h2>
      <DescriptionList items={items} />
    </div>
  )
})

DescriptionSection.displayName = 'DescriptionSection'

export default DescriptionSection