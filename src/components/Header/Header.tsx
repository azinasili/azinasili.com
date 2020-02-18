import React from 'react';
import Link from 'next/link';
import { SocialLinks } from '../../types/socialLink';

interface HeaderProps {
  title: string;
  subTitle: string;
  links?: SocialLinks;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subTitle,
  links,
}): React.ReactElement => {
  const socialLinks = links.map(({ _id, url, title: urlTitle, icon }) => (
    <React.Fragment key={_id}>
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
  ));

  return (
    <header className="header">
      <h1>
        <Link href="/">
          <a>{title}</a>
        </Link>
      </h1>
      <p>{subTitle}</p>
      <ul className="profile-items">{socialLinks}</ul>
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

export default React.memo(Header);
