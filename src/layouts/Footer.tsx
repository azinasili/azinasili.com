import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy;{new Date().getFullYear()} Azin Asili. All Rights Reserved.</p>
    </footer>
  );
}
