import type { AppProps } from 'next/app';
import { useAddClassToRootNode } from '~/hooks/useAddClassToRootNode';
import { useMouseTracking } from '~/hooks/useMouseTracking';
import { azeretMono } from '~/shared/fonts';
import 'modern-normalize/modern-normalize.css';
import '~/styles/global.css';
import '~/styles/App.css';

export default function App({ Component, pageProps }: AppProps) {
  useAddClassToRootNode(azeretMono.variable);
  useMouseTracking();
  return <Component {...pageProps} />;
}
