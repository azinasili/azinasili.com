import type { AppProps } from 'next/app';
import { useMouseGradient } from 'hooks/useMouseGradient';
import 'styles/global.css';
import 'styles/App.css';

export default function AzinAsiliApp({ Component, pageProps }: AppProps) {
  useMouseGradient();
  return <Component {...pageProps} />;
}
