import type { PropsWithChildren, ReactNode } from 'react';
import { Common } from './Common';
import { Footer } from './Footer';
import { Seo } from './Seo';

interface BasicProps {
  title: string;
  description: string;
  headerSlot: ReactNode;
}

export function Basic({
  children,
  description,
  headerSlot,
  title,
}: PropsWithChildren<BasicProps>) {
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
