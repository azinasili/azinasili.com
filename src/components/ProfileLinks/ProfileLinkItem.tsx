import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import type { ProfileLink } from 'types/Profile';

const Item = styled.li`
  &:not(:first-child) {
    margin-top: ${em(8)};
  }

  &:not(:last-child) {
    margin-bottom: ${em(8)};
  }
`;

const Image = styled.img`
  display: inline-block;
  height: 1em;
  margin-right: ${em(4)};
  transform: translateY(${em(-2)});
  vertical-align: middle;
  width: 1em;
`;

const Name = styled.span`
  display: inline-block;
`;

const ProfileLinkItem: React.FC<ProfileLink> = ({ iconPath, title, url }) => {
  return (
    <Item>
      <a href={url} rel="noreferrer noopener">
        <Image
          alt={title}
          height={16}
          src={`/socialmedia/${iconPath}`}
          width={16}
        />
        <Name>{title}</Name>
      </a>
    </Item>
  );
};

export default React.memo(ProfileLinkItem);
