import React from 'react'
import Nav from '../shared/nav/Nav'
import Packge from './Packge'
import Footer from '../shared/footer/Footer'
const Packges = () => {
  return (
    <>
    
    <Nav/>
    <div className='packge-contaier'>
      <h1 className='packge-heading'>الباقات</h1>
      <div className='pakges'>
        <Packge/>
        <Packge/>
        <Packge/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Packges