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
      <div>
        <span className={styles.t}>
          {title} <DescriptionIcon />
        </span>
        <p className={styles.c}>{content}</p>
      </div>
    </>
  );
}
