import React, { ChangeEventHandler, InputHTMLAttributes } from 'react'
import { cn } from 'lib/utils'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  className,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className='flex items-center space-x-2'>
      <label className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          {...props}
        />
        {label && (
          <span className="ml-2 text-gray-700 text-sm font-medium">{label}</span>
        )}
      </label>
    </div>
  );
};

export default Checkbox;