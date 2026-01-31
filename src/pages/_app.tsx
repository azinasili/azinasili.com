import type { AppProps } from 'next/app';
import { useMouseTracking } from 'hooks/useMouseTracking';
import 'modern-normalize/modern-normalize.css';
import 'styles/global.css';
import 'styles/App.css';

export default function AzinAsiliApp({ Component, pageProps }: AppProps) {
  useMouseTracking();
  return <Component {...pageProps} />;
}
