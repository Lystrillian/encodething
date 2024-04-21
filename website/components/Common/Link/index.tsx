import * as React from 'react';
import Link from 'next/link';
import { ExternalLinkIcon } from '../Icon';
import { cn } from '../../../lib/utils';
import styles from './index.module.css';

export interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  text: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  textClassName?: string;
}

const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (
    {
      href,
      label,
      text,
      icon = <ExternalLinkIcon size={16} strokeWidth={1} />,
      iconClassName,
      textClassName,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Link
        ref={ref}
        href={href}
        aria-label={label}
        className={cn(styles.l, className)}
        {...props}
      >
        <span className={cn(styles.t, textClassName)}>{text}</span>
        <span className={cn(styles.i, iconClassName)}>{icon}</span>
      </Link>
    );
  },
);

CustomLink.displayName = 'CustomLink';

export { CustomLink };
