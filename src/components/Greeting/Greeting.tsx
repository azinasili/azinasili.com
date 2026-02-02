import styles from './Greeting.module.css';

export function Greeting() {
  return (
    <h1 className={styles.greeting}>
      <span aria-hidden>👋</span>
      <span className={styles.gradientText}>Hi</span>
    </h1>
  );
}
