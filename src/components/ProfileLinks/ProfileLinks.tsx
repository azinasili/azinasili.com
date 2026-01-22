import type { ProfileLink } from 'types/Profile';
import { PointerList } from 'components/PointerList';
import { ProfileLinkItem } from './ProfileLinkItem';

interface ProfileLinksProps {
  profileLinks: ProfileLink[];
}

export function ProfileLinks({ profileLinks }: ProfileLinksProps) {
  return (
    <PointerList>{profileLinks.map(profileLink => <ProfileLinkItem {...profileLink} key={profileLink.id} />)}</PointerList>
  );
}
