import type { FC } from 'react';
import { memo } from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import type { ProfileLink } from 'types/Profile';
import { PointerList } from 'components/PointerList';

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

const ProfileLinkItem: FC<ProfileLink> = ({ iconPath, title, url }) => {
  return (
    <PointerList.Item>
      <a href={url} rel="noreferrer noopener">
        <Image
          alt={title}
          height={16}
          src={`/socialmedia/${iconPath}`}
          width={16}
        />
        <Name>{title}</Name>
      </a>
    </PointerList.Item>
  );
};

export default memo(ProfileLinkItem);
