import type { PropsWithChildren, ReactNode } from 'react';
import { Common } from './Common';
import { Footer } from './Footer';
import { Seo } from './Seo';

interface BaseBasicProps {
  title: string;
  description: string;
  headerSlot: ReactNode;
}

type BasicProps = PropsWithChildren<BaseBasicProps>;

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
