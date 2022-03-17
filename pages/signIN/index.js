import React from 'react'
import  Nav from '../../components/shared/nav/Nav'
import Footer from '../../components/shared/footer/Footer'
import {SignInComponent}  from '../../components/singIN/SignIn'
import { getSession ,useSession, signIn, signOut } from "next-auth/react";

import data from '../api/getYTData'
const signIN = () => {
  // return (
  //   <div>
  //       <Nav/>
  //       <SignInComponent/>
       
  //       <Footer/>
  //   </div>
  // )
  const { data: token, status } = useSession()
  console.log(token)
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
  
}

export default signIN

export async function getServiceSideProps(context){
console.log(context + "siham ananzeh");
}