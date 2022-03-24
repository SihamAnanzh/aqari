import React from 'react'
import  Nav from '../../components/shared/nav/Nav'
import Footer from '../../components/shared/footer/Footer'
import {SignInComponent}  from '../../components/singIN/SignIn'
import { getCsrfToken, signIn, getSession, providers, useSession, getProviders } from 'next-auth/react';


export async function getServerSideProps(context) {
  const session = await getSession(context);
  const providers = await getProviders();
  if (session) {
      // context.res.writeHead(303, { Location: "/" });
      // context.res.redirect("/", 303);
      // context.res.end();
  }
  return {
      props: {
          csrfToken: await getCsrfToken(context),
          providers: providers
      },
  };
}


const SignIN = ({ csrfToken, providers }) => {

  return (
    <div>
        <Nav/>
        <SignInComponent csrfToken={csrfToken}  providers={providers}/>
           
        <Footer/>
    </div>
  )  
  }

export default SignIN





