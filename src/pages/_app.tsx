import React from 'react';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';
import GlobalStyles from 'components/GlobalStyles';

export default function AzinAsiliApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <>
      <NextHead>
        <link
          href="https://fonts.googleapis.com/css?family=Courier+Prime:400,400i,700,700i&display=swap"
          rel="stylesheet"
        />
      </NextHead>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
