import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useMouseTracking } from '~/hooks/useMouseTracking';
import { azeretMono } from '~/shared/fonts';
import 'modern-normalize/modern-normalize.css';
import '~/styles/global.css';
import '~/styles/App.css';

export default function App({ Component, pageProps }: AppProps) {
  useMouseTracking();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    document.documentElement.classList.add(azeretMono.variable);

    return () => {
      document.documentElement.classList.remove(azeretMono.variable);
    };
  }, []);

  return <Component {...pageProps} />;
}
