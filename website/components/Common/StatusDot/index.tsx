import {
  ErrorDotIcon,
  ReadyDotIcon,
  BuildingDotIcon,
  CancelledDotIcon,
  QueuedDotIcon,
} from '../Icon';
import styles from './index.module.css';

export interface StatusDotProps {
  label: string;
  icon: React.ComponentType<any>;
}

export default function StatusDot({ label, icon: Icon }: StatusDotProps) {
  return (
    <>
      <div className={styles.c}>
        <Icon />
        <span className={styles.l}>{label}</span>
      </div>
    </>
  );
}
