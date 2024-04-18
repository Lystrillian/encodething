import Link from 'next/link';
import styles from './index.module.css';
import { ExternalLinkIcon } from '../Icon';

export default function CustomLink({
  href,
  label,
  text,
}: {
  href: string;
  label: string;
  text: string;
}) {
  return (
    <>
      <Link href={href} aria-label={label} className={styles.l}>
        {text}{' '}
        <div>
          <ExternalLinkIcon />
        </div>
      </Link>
    </>
  );
}
