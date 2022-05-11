import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import { Common } from './Common';
import { Footer } from './Footer';
import { Seo } from './Seo';

interface BasicProps {
  title: string;
  description: string;
  headerSlot: ReactNode;
  children: ReactNode;
}

const BasicInner: FC<BasicProps> = ({
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

export const Basic = memo(BasicInner);
