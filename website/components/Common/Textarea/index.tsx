import styles from './index.module.css';

export default function Textarea({
  value,
  label,
  onChange,
  placeholder,
}: {
  value?: any;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}) {
  return (
    <>
      <label htmlFor={label} className={styles.h}>
        {label}
      </label>
      <textarea
        className={styles.j}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}
