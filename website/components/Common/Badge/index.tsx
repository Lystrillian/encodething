import * as React from 'react';
import { cn } from 'lib/utils';
import { FallbackIcon } from '../Icon/index';

const badgeVariants = {
  gray: 'bg-ds-gray-700 text-ds-background-100',
  blue: 'bg-ds-blue-700 text-ds-background-100',
  purple: 'bg-ds-purple-700 text-ds-background-100',
  amber: 'bg-ds-amber-700 text-ds-background-100',
  red: 'bg-ds-red-700 text-ds-background-100',
  pink: 'bg-ds-pink-700 text-ds-background-100',
  green: 'bg-ds-green-700 text-ds-background-100',
  teal: 'bg-ds-teal-700 text-ds-background-100',
  trial:
    'bg-gradient-to-br from-[#0070f3] to-[#f81ce5] text-ds-color-primary-ds-foreground',
};

const badgeSubtleVariants = {
  gray: 'bg-ds-gray-200 text-ds-gray-900',
  blue: 'bg-ds-blue-200 text-ds-blue-900',
  purple: 'bg-ds-purple-200 text-ds-purple-900',
  amber: 'bg-ds-amber-200 text-ds-amber-900',
  red: 'bg-ds-red-200 text-ds-red-900',
  pink: 'bg-ds-pink-200 text-ds-pink-900',
  green: 'bg-ds-green-200 text-ds-green-900',
  teal: 'bg-ds-teal-200 text-ds-teal-900',
  trial: 'bg-gradient-to-br from-[#ff1e56] to-[#f81ce5] text-white',
};

const badgeSizes = {
  sm: 'h-5 px-1.5 gap-0.5',
  md: 'h-6 px-2.5 gap-2',
  lg: 'h-8 px-3 gap-3',
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
  subtle?: boolean;
  size?: keyof typeof badgeSizes;
  icon?: React.ReactNode;
  label: string;
}

export function Badge({
  className,
  variant = 'gray',
  subtle = false,
  size = 'md',
  icon,
  label,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-[32px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        subtle ? badgeSubtleVariants[variant] : badgeVariants[variant],
        badgeSizes[size],
        className,
      )}
      {...props}
    >
      {icon || <FallbackIcon className="mr-1 h-3 w-3" />}
      <span>{label}</span>
    </div>
  );
}
