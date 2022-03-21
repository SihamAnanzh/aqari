import '../styles/styles.scss';
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
    <SessionProvider session={session}>
    <FliterProvider>
      <AuthContextProvider>

        {
          !authCtx.isLoadding? <Loader/>:  <Component {...pageProps} />
        }
    
  </AuthContextProvider>
  </FliterProvider>
  </SessionProvider>
  ) 
}

export default MyApp
