import type { PropsWithChildren } from 'react';
import styles from './Common.module.css';

type CommonProps = PropsWithChildren;

export function Common({ children }: CommonProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
