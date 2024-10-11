import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import type { DocumentProps } from 'next/document'
import i18nextConfig from '../next-i18next.config'

type Props = DocumentProps

class MyDocument extends Document<Props> {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ??
      i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
        <Head />
          <meta charSet="UTF-8" />
          <meta name="description" content="Internationalization" />
          <meta name="keywords" content="Next.js, Pages Router" />
          <meta name="author" content="LECTRUM" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
          <title>Internationalization | 1</title>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument