import React from 'react';
import type { ProfileLink } from 'types/Profile';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Seo from './Seo';

interface BasicProps {
  title: string;
  description: string;
  profileLinks: ProfileLink[];
  children: React.ReactNode;
}

const Basic: React.FC<BasicProps> = ({
  title,
  description,
  profileLinks,
  children,
}) => (
  <Seo title={title} description={description}>
    <div className="wrap">
      <Header
        title="Azin Asili"
        links={profileLinks}
      />
      <main className="main">{children}</main>
      <Footer />
    </div>
    <style jsx>
      {`
        .wrap {
          display: grid;
          grid-row-gap: 2em;
          grid-template-columns: minmax(auto, 63ch);
          grid-template-rows: auto 1fr auto;
          height: 100vh;
        }
      `}
    </style>
    <style jsx global>
      {`
        .main > :first-child {
          margin-top: 0;
        }

        .wrap > * {
          padding-left: 1em;
          padding-right: 1em;
        }
      `}
    </style>
  </Seo>
);

export default React.memo(Basic);
