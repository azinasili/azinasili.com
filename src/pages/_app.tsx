import type { AppProps } from 'next/app';
import 'styles/App.css';

export default function AzinAsiliApp({
  Component,
  pageProps,
}: AppProps) {
  return <Component {...pageProps} />;
}
