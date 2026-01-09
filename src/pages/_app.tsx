import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from 'components/GlobalStyles';

export default function AzinAsiliApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
