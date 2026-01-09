import type { ReactNode } from 'react';
import { Common } from './Common';
import { Footer } from './Footer';
import { Seo } from './Seo';

interface BasicProps {
  title: string;
  description: string;
  headerSlot: ReactNode;
  children: ReactNode;
}

export function Basic({
  children,
  description,
  headerSlot,
  title,
}: BasicProps) {
  return (
    <Seo title={title} description={description}>
      <Common>
        <header>{headerSlot}</header>
        <main>{children}</main>
        <Footer />
      </Common>
    </Seo>
  );
}
