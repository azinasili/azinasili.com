import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import NextHead from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  children: ReactNode;
}

const SeoInner: FC<SeoProps> = ({
  title,
  description,
  children,
}) => (
  <>
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
    </NextHead>
    {children}
  </>
);

export const Seo = memo(SeoInner);
