import type { ProfileLink } from 'types/Profile';
import { PointerList } from 'components/PointerList';
import styles from './ProfileLinkItem.module.css';

export function ProfileLinkItem({ iconPath, title, url }: ProfileLink) {
  return (
    <PointerList.Item>
      <a href={url} rel="noreferrer noopener">
        <img alt={title} className={styles.img} height={16} src={`/socialmedia/${iconPath}`} width={16} />
        <span className={styles.name}>{title}</span>
      </a>
    </PointerList.Item>
  );
}
