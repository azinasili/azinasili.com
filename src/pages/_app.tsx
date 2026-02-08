import React from 'react';
import type { AppProps } from 'next/app';
import { useMouseTracking } from '~/hooks/useMouseTracking';
import { Typeface } from '~/components/Typeface';
import 'modern-normalize/modern-normalize.css';
import '~/styles/global.css';
import '~/styles/App.css';

export default function App({ Component, pageProps }: AppProps) {
  useMouseTracking();
  return (
    <React.Fragment>
      <Typeface />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
