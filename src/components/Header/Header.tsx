import React from 'react';
import Link from 'next/link';
import { ProfileLinks } from '../../types/profile';

interface HeaderProps {
  title: string;
  subTitle: string;
  links?: ProfileLinks;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subTitle,
  links,
}): React.ReactElement => {
  const profileLinks = links.map(({ id, url, title: urlTitle, icon }) => {
    return (
      <React.Fragment key={id}>
        <li className="profile-item">
          <a href={url}>
            <img
              src={`/socialmedia/${icon}`}
              alt={urlTitle}
              className="profile-image"
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
              vertical-align: middle;
            }

            .profile-image {
              margin-right: 0.25em;
            }
          `}
        </style>
      </React.Fragment>
    );
  });

  return (
    <header className="header">
      <h1>
        <Link href="/">
          <a>{title}</a>
        </Link>
      </h1>
      <p>{subTitle}</p>
      <ul className="profile-items">{profileLinks}</ul>
      <style jsx>
        {`
          .header {
            text-align: center;
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
