import { forwardRef } from 'react';
import {
  ErrorDotIcon,
  ReadyDotIcon,
  BuildingDotIcon,
  CancelledDotIcon,
  QueuedDotIcon,
} from '../Icon';
import { cn } from 'lib/utils';
import styles from './index.module.css';

export type StatusDotStatus =
  | 'error'
  | 'ready'
  | 'building'
  | 'cancelled'
  | 'queued';

export interface StatusDotProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: StatusDotStatus;
  label?: string;
}

const statusIconMap: Record<StatusDotStatus, React.ComponentType<any>> = {
  error: ErrorDotIcon,
  ready: ReadyDotIcon,
  building: BuildingDotIcon,
  cancelled: CancelledDotIcon,
  queued: QueuedDotIcon,
};

const StatusDot = forwardRef<HTMLDivElement, StatusDotProps>(
  ({ status = 'ready', label, className, ...props }, ref) => {
    const StatusIcon = statusIconMap[status];

    return (
      <div
        ref={ref}
        className={cn(styles.c, styles[status], className)}
        {...props}
      >
        <StatusIcon className={styles.icon} />
        {label && <span className={styles.l}>{label}</span>}
      </div>
    );
  },
);

StatusDot.displayName = 'StatusDot';

export { StatusDot };
