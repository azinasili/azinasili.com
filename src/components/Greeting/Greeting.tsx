import styles from './Greeting.module.css';

export function Greeting() {
  return (
    <h1>
      👋 <span className={styles.gradientText}>Hi</span>
    </h1>
  );
}
