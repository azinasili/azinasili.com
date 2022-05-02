import React from 'react';
import styled from 'styled-components';
import type { ProfileLink } from 'types/Profile';
import ProfileLinkItem from './ProfileLinkItem';

interface ProfileLinksProps {
  profileLinks: ProfileLink[];
};

const Items = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ProfileLinks: React.FC<ProfileLinksProps> = ({ profileLinks }) => {
  return (
    <Items>{profileLinks.map(profileLink => <ProfileLinkItem key={profileLink.id} {...profileLink} />)}</Items>
  );
}

export default ProfileLinks;
