import React from 'react'
import Footer from '../shared/footer/Footer'
import Nav from '../shared/nav/Nav'
const NoResults = ({ navOb, adsOb, fo1 }) => {
  return (
      <div className="noResults-container">
        <Nav navOb={navOb} />
        <div className='noResults'>
          <img src="assets/img/noResults.svg" alt="" />
          <h2 className='noResults-heading'>
            {adsOb.ad5}      </h2>
        </div>
        <Footer fo1={fo1} />
      </div>
  )
}

export default NoResults