import type { ComponentPropsWithRef } from 'react';
import styles from './PointerListItem.module.css';

type PointerListItemProps = ComponentPropsWithRef<'li'>;

export function PointerListItem({ children, ...props }: PointerListItemProps) {
  return <li {...props} className={styles.item}>{children}</li>
}
