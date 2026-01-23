import type { AppProps } from 'next/app';
import 'styles/global.css';
import 'styles/App.css';

export default function AzinAsiliApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
