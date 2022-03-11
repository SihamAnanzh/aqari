import React, { useState } from 'react'
import  Nav from '../components/shared/nav/Nav'
import Footer from '../components/shared/footer/Footer'
import  SignUpComponents from '../components/singUp/SignUpComponents'
const SignUp = () => {


  return (
      <div>
        <Nav/>
        <SignUpComponents />
        <Footer/>
        </div>
  )
}

export default SignUp