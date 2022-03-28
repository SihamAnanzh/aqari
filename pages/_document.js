import Document, { Html, Head, Main, NextScript } from 'next/document';
import router from 'next/router';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export const getServerSideProps = async ({ locale }) => ({

  return: {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }

})


class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }


  render() {
    const lang = this.props.locale
    return (
      <Html>
        <Head>
          <meta charset="utf-8" class="next-head" />

          <link href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500&display=swap" rel="stylesheet" />          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mrs+Saint+Delafield&family=Tenor+Sans&display=swap'
            rel='stylesheet'
          />

        </Head>
        <body id='body' className={lang === "EN" ? "ltr" : "rtl"}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;