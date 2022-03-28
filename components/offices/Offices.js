import React, { useEffect, useContext } from 'react'
import Nav from '../shared/nav/Nav'
import SingleOffice from './SingleOffice'
import Footer from '../shared/footer/Footer'
import {TranslateContext} from '../../stores/translate-context'
const Offices = ({offices,fo1,navOb,ofOb}) => {
  return (
    <>  
      <Nav navOb={navOb}/>
      <div  className='offices'>
      <h1  className='offices-heading'>{ofOb.of1}</h1>
        <div className='offices-container'>
             {offices&&offices.map((office)=>(
               <SingleOffice key={office.id} office={office} />
             ))}

        </div>
         {offices.length>20&&
        
        <div className='adds-btn office-more-btn'>
            {ofOb.of4}<span className='btn-icon'>
            <img src={offices.logo_url} style={{
              width: '20px',
              height: '20px',
          
            
            }}/>
                </span> 
          </div>}
      </div>

      <Footer fo1={fo1}/>
    </>
  )
}

export default Offices;