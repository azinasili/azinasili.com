import React, { type PropsWithChildren } from 'react';
import NextHead from 'next/head';

interface BaseSeoProps {
  title: string;
  description: string;
}

type SeoProps = PropsWithChildren<BaseSeoProps>;

export function Seo({ title, description, children }: SeoProps) {
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
