import type { FC } from 'react';
import { memo } from 'react';
import type { ProfileLink } from 'types/Profile';
import { PointerList } from 'components/PointerList';
import ProfileLinkItem from './ProfileLinkItem';

interface ProfileLinksProps {
  profileLinks: ProfileLink[];
}

const ProfileLinks: FC<ProfileLinksProps> = ({ profileLinks }) => {
  return (
    <PointerList>{profileLinks.map(profileLink => <ProfileLinkItem {...profileLink} key={profileLink.id} />)}</PointerList>
  );
};

export default memo(ProfileLinks);
