import '../styles/styles.scss';
import { SessionProvider } from "next-auth/react"
import { AuthContext, AuthContextProvider } from '../stores/auth-context';
import { useContext, useEffect, useState } from 'react';
import Loader from '../components/loader/Loader'
import { FliterProvider } from '../stores/filter';
import { useRouter } from "next/router";

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

const authCtx=useContext(AuthContext)
  return( 
    <SessionProvider session={session} 
  
    >  
    <FliterProvider>
      <AuthContextProvider>

        {
          pageLoading? <Loader/>:  <Component {...pageProps} />
        }
    
  </AuthContextProvider>
  </FliterProvider>
  </SessionProvider>
  ) 
}

export default MyApp
