// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class AzinAsiliDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://unpkg.com/normalize.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Courier+Prime:400,400i,700,700i&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AzinAsiliDocument;
