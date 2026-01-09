import React, { type ReactNode } from 'react';
import NextHead from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function Seo({
  title,
  description,
  children,
}: SeoProps) {
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
