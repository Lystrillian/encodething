import { DescriptionIcon } from '../Icon';
import styles from './index.module.css';

export default function Description({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <>
      <div className={styles.c}>
        <span className={styles.t}>
          {title} <DescriptionIcon />
        </span>
        <p className={styles.x}>{content}</p>
      </div>
    </>
  );
}
