import '../styles/styles.scss';
import { SessionProvider } from "next-auth/react"
import { AuthContext, AuthContextProvider } from '../stores/auth-context';
import { useContext, useEffect, useState } from 'react';
import Loader from '../components/loader/Loader'
import { FliterProvider } from '../stores/filter';
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import {TranslateContext, TranslateProvider} from '../stores/translate-context'
import {useTranslation} from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
function MyApp({
  Component, 
  pageProps: { session, ...pageProps }
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

let { t } = useTranslation();
    
// translations

//nav
let nav1=t('home:nav-1')
let nav2=t('home:nav-2')
let nav3=t('home:nav-3')
let nav4=t('home:nav-4')
let nav5=t('home:nav-5')
let nav6=t('home:nav-6')
let nav7=t('home:nav-7')
let nav8=t('home:nav-8')
let nav9=t('home:nav-9')
let nav10=t('home:nav-10')
let nav11=t('home:nav-11')

//banner 
let bn=t('home:banner')
let navOb={
  nav1,
  nav2,
  nav3,
  nav4,
  nav5,
  nav6,
  nav7,
  nav8,
  nav9,
  nav10,
  nav11
}



//footer
let fo1=t('home:footer')


//adds section
let ad1=t('home:ads-1')
let ad2=t('home:ads-2')
let ad3=t('home:ads-3')

let adsOb={
  ad1,
  ad2,
  ad3
}



const authCtx=useContext(AuthContext)

const tranCtx=useContext(TranslateContext)
tranCtx.navOb=navOb
tranCtx.fo=fo1
tranCtx.bn=bn
tranCtx.adsOb=adsOb
  return( 
    <SessionProvider session={session} 
  
    >  
 
    <FliterProvider>
      <AuthContextProvider>
      <TranslateProvider>

        {
          pageLoading? <Loader/>:  <Component {...pageProps} />
        }
  </TranslateProvider>
  </AuthContextProvider>
  </FliterProvider>

  </SessionProvider>
  ) 
}

export default appWithTranslation(MyApp);




export async function getServerSideProps({locale}) {
  return { props: {...(await serverSideTranslations(locale, ['home','signUp']))} }
}
