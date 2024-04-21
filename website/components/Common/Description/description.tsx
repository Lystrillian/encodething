import { DescriptionIcon } from '../Icon/icons';
import styles from './description.module.css';
import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface DescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const Description = React.forwardRef<HTMLDivElement, DescriptionProps>(
  (
    {
      title,
      content,
      icon = <DescriptionIcon strokeWidth={1} />,
      iconClassName,
      titleClassName,
      contentClassName,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn(styles.c, className)} {...props}>
        <div className={styles.h}>
          <h3 className={cn(styles.t, titleClassName)}>{title}</h3>
          <span className={cn(styles.i, iconClassName)}>{icon}</span>
        </div>
        <div className={cn(styles.x, contentClassName)}>{content}</div>
      </div>
    );
  },
);

Description.displayName = 'Description';

export { Description };
