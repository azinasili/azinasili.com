import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ProfileLinks } from '../types/profile';

interface BasicProps {
  title: string;
  description: string;
  profileLinks: ProfileLinks;
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
      <main>{children}</main>
      <Footer />
    </div>
    <style jsx>
      {`
        // [1] \`38em\` is equivalent to \`75ch\`
        //
        // Why \`75ch\`?
        // The \`ch\` CSS unit is equivalent to the fonts character
        // width. For best readability it's recommended to have
        // roughly 75 characters per line.
        .wrap {
          display: grid;
          grid-row-gap: 2em;
          grid-template-columns: minmax(min-content, 38em); // [1]
          grid-template-rows: auto 1fr auto;
          justify-content: center;
          height: 100vh;
        }
      `}
    </style>
  </>
);

export default Basic;
