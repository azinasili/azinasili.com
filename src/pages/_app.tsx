import type { AppProps } from 'next/app';
import { GlobalStyles } from 'components/GlobalStyles';

export default function AzinAsiliApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
