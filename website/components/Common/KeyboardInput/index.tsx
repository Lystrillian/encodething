import styles from './index.module.css'

export default function KeyboardInput({key}: {key: string}) {
  return (
    <>
    <kbd className={styles.k}>
      {key}
    </kbd>
    </>
  )
}