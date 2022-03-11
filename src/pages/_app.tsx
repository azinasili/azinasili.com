import React from 'react';
import type { AppProps } from 'next/app';

export default function AzinAsiliApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          // [1] Use percentage for better a11y
          // Project uses \`em\` CSS units. For best
          // scalability use percentage. This allows users
          // to override \`font-size\` with their browser
          // settings.
          :root {
            --app-primary-font-family: 'Courier Prime', monospace;
            --app-background-color: hsla(0, 0, 100, 1);
            --app-font-weight: 400;
            --app-line-height: 1.65;
            --app-text-color: hsla(218, 22, 20, 1);

            --root-font-size: 115%;
            --heading1-font-size: 2.488em;
            --heading2-font-size: 2.074em;
            --heading3-font-size: 1.728em;
            --heading4-font-size: 1.44em;
            --heading5-font-size: 1.2em;
            --heading6-font-size: 1em;
            --small-font-size: 0.833em;

            --heading-font-weight: 700;
            --heading-line-height: 1.15;
            --heading-margin-bottom: 1.05rem;
            --heading-margin-top: 2.75rem;
            --paragraph-margin-bottom: 1.15rem;
          }

          :root {
            font-size: var(--root-font-size); // [1]
            box-sizing: border-box;
          }

          @media (min-width: 40em) {
            :root {
              --root-font-size: 125%;
            }
          }

          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }

          body {
            background-color: var(--app-background-color);
            color: var(--app-text-color);
            font-family: var(--app-primary-font-family);
            font-size: 1em;
            font-weight: var(--app-font-weight);
            line-height: var(--app-line-height);
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: var(--heading-font-weight);
            line-height: var(--heading-line-height);
            margin-bottom: var(--heading-margin-bottom);
            margin-top: var(--heading-margin-top);
          }

          h1 {
            font-size: var(--heading1-font-size);
            margin-top: 0;
          }

          h2 {
            font-size: var(--heading2-font-size);
          }
          h3 {
            font-size: var(--heading3-font-size);
          }
          h4 {
            font-size: var(--heading4-font-size);
          }
          h5 {
            font-size: var(--heading5-font-size);
          }
          h6 {
            font-size: var(--heading6-font-size);
          }

          p {
            margin-bottom: var(--paragraph-margin-bottom);
          }

          small,
          .text_small {
            font-size: var(--small-font-size);
          }
        `}
      </style>
    </>
  );
}
