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
    <label className={cn('flex items-center', className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
        {...props}
      />
      {label && (
        <span className="ml-2 text-gray-700 text-sm font-medium">{label}</span>
      )}
    </label>
  );
};

export default Checkbox;