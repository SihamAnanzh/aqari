import '../styles/styles.scss';
// import {Provder as AuthProvider} from 'next-auth'
import { SessionProvider } from "next-auth/react"
import { AuthContext, AuthContextProvider } from '../stores/auth-context';
import { useContext } from 'react';
import Loader from '../components/loader/Loader'
import { FliterProvider } from '../stores/filter';

function MyApp({
  Component, 
  pageProps: { session, ...pageProps }
}) {
const authCtx=useContext(AuthContext)
  return( 
    <FliterProvider>
  <AuthContextProvider>
    <SessionProvider session={session}>

        {
          !authCtx.isLoadding? <Loader/>:  <Component {...pageProps} />
        }
    
    </SessionProvider>
  </AuthContextProvider>
  </FliterProvider>
  ) 
}

export default MyApp
