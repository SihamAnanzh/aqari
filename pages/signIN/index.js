import React from 'react'
import  Nav from '../../components/shared/nav/Nav'
import Footer from '../../components/shared/footer/Footer'
import {SignInComponent}  from '../../components/singIN/SignIn'
//  import {useSession , signIn} from 'next-auth/client'
import { useSession, signIn, signOut } from "next-auth/react"

const signIN = () => {
  return (
    <div>
        <Nav/>
        <SignInComponent/>
       
        <Footer/>
    </div>
  )
  // const { data: session } = useSession()

  // console.log({session});
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // )
  
}

export default signIN