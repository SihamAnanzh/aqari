import React from 'react'
import Footer from '../shared/footer/Footer'
import Nav from '../shared/nav/Nav'
const NoResults = () => {
  return (
    <div className="noResults-container">
      <Nav/>
    <div className='noResults'>
      <img  src="assets/img/noResults.svg" alt="" />
      <h2 className='noResults-heading'>عذراً لا يوجد نتائج</h2>
    </div>
    <Footer/>
    </div>
  )
}

export default NoResults