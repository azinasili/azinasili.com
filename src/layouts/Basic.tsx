import React from 'react';
import Footer from './Footer';
import Common from './Common';
import Seo from './Seo';

interface BasicProps {
  title: string;
  description: string;
  headerSlot: React.ReactNode;
  children: React.ReactNode;
}

const Basic: React.FC<BasicProps> = ({
  children,
  description,
  headerSlot,
  title,
}) => (
  <Seo title={title} description={description}>
    <Common>
      <header>{headerSlot}</header>
      <main>{children}</main>
      <Footer />
    </Common>
  </Seo>
);

export default React.memo(Basic);
