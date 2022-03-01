import React from 'react'
import OfficeDetails from '../../components/offices/OfficeDetails'
import Footer from '../../components/shared/footer/Footer'
import Nav from '../../components/shared/nav/Nav'
const singleOffec = () => {

  return (
    <>
    <Nav logo='/assets/img/logo.svg' icon='/assets/img/+.png'/>
    <OfficeDetails/>
    <Footer/>
    </>
  )
}

export default singleOffec