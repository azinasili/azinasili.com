import type { PropsWithChildren, ReactNode } from 'react';
import { Common } from './Common';
import { Footer } from './Footer';
import { Seo } from './Seo';

interface BaseBasicProps {
  title: string;
  description: string;
  header?: ReactNode;
}

type BasicProps = PropsWithChildren<BaseBasicProps>;

export function Basic({ children, description, header, title }: BasicProps) {
  return (
    <Seo title={title} description={description}>
      <Common>
        {header ? <header>{header}</header> : undefined}
        <main>{children}</main>
        <Footer />
      </Common>
    </Seo>
  );
}
