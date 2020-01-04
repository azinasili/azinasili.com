import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ProfileLinks } from '../../pages/index';

interface BasicProps {
  title: string;
  description: string;
  profileLinks: ProfileLinks[];
}

const Basic: React.FC<BasicProps> = ({
  title,
  description,
  profileLinks,
  children,
}): React.ReactElement => (
  <>
    <div className="wrap">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="Azin Asili"
        subTitle="Front-End Engineer"
        links={profileLinks}
      />
      <main className="app-body">{children}</main>
      <Footer />
    </div>
    <style jsx>
      {`
        .wrap {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        .app-body {
          align-self: center;
          background-color: red;
          flex: 1;
          padding: .25em 1em;
          max-width: 38em;
        }
      `}
    </style>
  </>
);

export default Basic;
