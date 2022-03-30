import '../styles/styles.scss';
import { SessionProvider } from "next-auth/react"
import { AuthContext, AuthContextProvider } from '../stores/auth-context';
import { useContext, useEffect, useState } from 'react';
import Loader from '../components/loader/Loader'
import { FliterProvider } from '../stores/filter';
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import { TranslateContext, TranslateProvider } from '../stores/translate-context'

function MyApp({
  Component,
  pageProps
}) {

  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => {
      setTimeout(() => {
        setPageLoading(false);
      }, 1000)


    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);


  return (
    <SessionProvider session={pageProps.session}>
      <FliterProvider>
        <AuthContextProvider>
          <TranslateProvider>

            {
              pageLoading ? <Loader /> : <Component {...pageProps} />
            }
          </TranslateProvider>
        </AuthContextProvider>
      </FliterProvider>

    </SessionProvider>
  )
}

export default appWithTranslation(MyApp);




// export async function getServerSideProps({locale}) {
//   return { props: {...(await serverSideTranslations(locale, ['home','signUp']))} }
// }
