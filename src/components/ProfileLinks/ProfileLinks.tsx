import type { FC } from 'react';
import { memo } from 'react';
import styled from 'styled-components';
import type { ProfileLink } from 'types/Profile';
import { PointerList } from 'components/PointerList';
import ProfileLinkItem from './ProfileLinkItem';

interface ProfileLinksProps {
  profileLinks: ProfileLink[];
}

const Items = styled(PointerList)`
  list-style: none;
  padding-left: 0;
`;

const ProfileLinks: FC<ProfileLinksProps> = ({ profileLinks }) => {
  return (
    <Items>{profileLinks.map(profileLink => <ProfileLinkItem {...profileLink} key={profileLink.id} />)}</Items>
  );
};

export default memo(ProfileLinks);
