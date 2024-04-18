import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import styles from './index.module.css';

const progressBarStyles = cva(
  'w-fit h-2 rounded-md bg-ds-gray-1000 overflow-hidden',
  {
    variants: {
      variant: {
        primary: 'bg-gray-1000',
        secondary: 'bg-gray-700',
        success: 'bg-blue-700',
        warning: 'bg-red-700',
        error: 'bg-amber-700',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

type ProgressBarProps = {
  id: string;
  value: number;
  percentage: number;
  maxWidth?: string;
} & VariantProps<typeof progressBarStyles>;

const ProgressBar: React.FC<ProgressBarProps> = ({
  id,
  percentage,
  variant,
  maxWidth,
}) => {
  return (
    <div>
      <label htmlFor={id} className={styles.l}>
        Progress
      </label>
      <div className={styles.c} style={{ maxWidth }}>
        {' '}
        <div
          className={`h-full ${progressBarStyles({ variant })}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className={styles.s}>{percentage}%</span>
    </div>
  );
};

export default ProgressBar;
