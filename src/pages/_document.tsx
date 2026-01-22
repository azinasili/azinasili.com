import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import 'styles/globals.css';
export default class AzinAsiliDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
