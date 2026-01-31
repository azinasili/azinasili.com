import type { ComponentPropsWithRef } from 'react';
import styles from './BasePointerList.module.css';

type BasePointerListProps = ComponentPropsWithRef<'ul'>;

export function BasePointerList({ children, ...props }: BasePointerListProps) {
  return (
    <ul {...props} className={styles.list}>
      {children}
    </ul>
  );
}
