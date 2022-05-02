import React from 'react';
import NextHead from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Seo: React.FC<SeoProps> = ({
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

export default React.memo(Seo);
