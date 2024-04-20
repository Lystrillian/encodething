import * as React from 'react'
import DescriptionItem from '../DescriptionItem'

interface DescriptionListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: React.ReactNode[]
}

const DescriptionList = React.forwardRef<HTMLDivElement, DescriptionListProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-wrap justify-center gap-4 mx-auto mt-3 ${className}`}
        {...props}
      >
        {items.map((item, index) => (
          <DescriptionItem key={index}>{item}</DescriptionItem>
        ))}
      </div>
    )
  }
)

DescriptionList.displayName = 'DescriptionList'

export default DescriptionList