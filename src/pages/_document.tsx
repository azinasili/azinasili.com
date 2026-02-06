import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="apple-touch-icon-precomposed" href="path/to/favicon-180.png" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/path/to/favicon-144.png" />
        <meta name="application-name" content="Name" />
        <meta name="msapplication-tooltip" content="Tooltip" />
        <meta name="msapplication-config" content="/path/to/ieconfig.xml" />
        <link rel="shortcut icon" sizes="192x192" href="/path/to/favicon-192.png" />
        <link rel="mask-icon" href="/path/to/mask-icon.svg" color="#900" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
