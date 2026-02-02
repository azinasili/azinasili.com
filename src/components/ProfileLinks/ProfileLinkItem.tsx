import type { ProfileLink } from '~/types/Profile';
import { PointerList } from '~/components/PointerList';

export function ProfileLinkItem({ title, url }: ProfileLink) {
  return (
    <PointerList.Item>
      <a href={url} rel="noreferrer noopener">
        {title}
      </a>
    </PointerList.Item>
  );
}
