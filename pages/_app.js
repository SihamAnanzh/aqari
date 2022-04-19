import "../styles/styles.scss";
import { SessionProvider } from "next-auth/react";
import { AuthContext, AuthContextProvider } from "../stores/auth-context";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/loader/Loader";
import { FliterProvider } from "../stores/filter";
import { useRouter } from "next/router";
import { appWithTranslation, useTranslation } from "next-i18next";
import NextNProgress from "nextjs-progressbar";

import {
  TranslateContext,
  TranslateProvider,
} from "../stores/translate-context";
import { route } from "next/dist/server/router";

function MyApp({ Component, pageProps, name }) {
  const router = useRouter();
  const { i18n } = useTranslation();

  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = ({ url, req }) => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setTimeout(() => {
        setPageLoading(false);
      }, 2000);

      console.log();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <FliterProvider>
          <AuthContextProvider>
            <TranslateProvider>
              <div className={router.locale == "ar" ? "" : "ltr"}>
                <NextNProgress options={{ showSpinner: false }} height={5} />
                <Component {...pageProps} />
              </div>
            </TranslateProvider>
          </AuthContextProvider>
        </FliterProvider>
      </SessionProvider>
    </>
  );
}

export default appWithTranslation(MyApp);

// export async function getServerSideProps({locale}) {
//   return { props: {...(await serverSideTranslations(locale, ['home','signUp']))} }
// }
