import React, { type PropsWithChildren } from 'react';
import NextHead from 'next/head';

interface SeoProps {
  title: string;
  description: string;
}

export function Seo({
  title,
  description,
  children,
}: PropsWithChildren<SeoProps>) {
  return (
    <React.Fragment>
      <NextHead>
        <title>{title}</title>
        <meta name="description" content={description} />
      </NextHead>
      {children}
    </React.Fragment>
  );
}
