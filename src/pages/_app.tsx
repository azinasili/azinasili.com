import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from 'components/GlobalStyles';
import { useMouseGradient } from 'hooks/useMouseGradient';
import 'styles/app.css';

export default function AzinAsiliApp({
  Component,
  pageProps,
}: AppProps) {
  useMouseGradient();
  return (
    <React.Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
