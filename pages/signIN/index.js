import React from 'react'
import  Nav from '../../components/shared/nav/Nav'
import Footer from '../../components/shared/footer/Footer'
import {SignInComponent}  from '../../components/singIN/SignIn'

const SignIN = () => {

  return (
    <div>
        <Nav/>
        <SignInComponent />
           
        <Footer/>
    </div>
  )  
  }

export default SignIN



