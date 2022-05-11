import type { AppProps } from 'next/app';
import { GlobalStyles } from 'components/GlobalStyles';

export default function AzinAsiliApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
