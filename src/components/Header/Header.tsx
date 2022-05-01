import React from 'react';
import NextLink from 'next/link';
import type { ProfileLink } from 'types/Profile';

interface HeaderProps {
  title: string;
  links: ProfileLink[];
}

const Header: React.FC<HeaderProps> = ({
  title,
  links,
}) => {
  const profileLinks = links.map(({ id, url, title: urlTitle, icon }) => {
    return (
      <React.Fragment key={id}>
        <li className="profile-item">
          <a href={url}>
            <img
              alt={urlTitle}
              className="profile-image"
              src={`/socialmedia/${icon}`}
            />
            <span className="profile-name">{urlTitle}</span>
          </a>
        </li>
        <style jsx>
          {`
            .profile-item {
              display: inline-block;
              font-size: 0.875em;
            }

            .profile-item:not(:last-child) {
              margin-right: 1.25em;
            }

            .profile-name,
            .profile-image {
              display: inline-block;
            }

            .profile-image {
              height: 1em;
              margin-right: 0.25em;
              transform: translateY(-0.125em);
              vertical-align: middle;
              width: 1em;
            }
          `}
        </style>
      </React.Fragment>
    );
  });

  return (
    <header className="header">
      <h1>
        <NextLink href="/">
          <a>{title}</a>
        </NextLink>
      </h1>
      <ul className="profile-items">{profileLinks}</ul>
      <style jsx>
        {`
          .header {
            padding-top: 1em;
          }

          .profile-items {
            list-style: none;
            padding-left: 0;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
