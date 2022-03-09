import React from 'react'
import Nav from '../shared/nav/Nav'
import SingleOffice from './SingleOffice'
import Footer from '../shared/footer/Footer'
const Offices = () => {
  return (
    <>  
      <Nav/>
      <div  className='offices'>
      <h1  className='offices-heading'>قائمة المكاتب</h1>
        <div className='offices-container'>
        <SingleOffice/>
        <SingleOffice/>
        <SingleOffice/>
        <SingleOffice/>
         <SingleOffice/> 
        <SingleOffice/> 
        <SingleOffice/>
        <SingleOffice/>
        <SingleOffice/> 
        <SingleOffice/> 
        <SingleOffice/>
        <SingleOffice/>
        <SingleOffice/> 
        <SingleOffice/> 
        <SingleOffice/>
        <SingleOffice/>
        <SingleOffice/> 
        <SingleOffice/> 
        <SingleOffice/>
        <SingleOffice/>
        <SingleOffice/>

        </div>
        <div className='adds-btn office-more-btn'>
             المزيد<span className='btn-icon'>
              <img src='/assets/img/+btn.svg' style={{
                width: '20px',
                height: '20px',
            
             
              }}/>
                  </span> 
           </div>
      </div>

      <Footer/>
    </>
  )
}

export default Offices;