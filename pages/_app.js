import '../styles/styles.scss';
// import {Provder as AuthProvider} from 'next-auth'
import { SessionProvider } from "next-auth/react"

function MyApp({
  Component, 
  pageProps: { session, ...pageProps }
}) {

  return( 
    <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
  ) 
}

export default MyApp
