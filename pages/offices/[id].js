import React ,{useState,useEffect}from 'react'
import OfficeDetails from '../../components/offices/OfficeDetails'
import Footer from '../../components/shared/footer/Footer'
import Nav from '../../components/shared/nav/Nav'
import axios from 'axios'

const SingleOffiece = ({ads, office,premium}) => {

  return (
    <div style={{height:"100%"}}>
    <Nav logo='/assets/img/logo.svg' icon='/assets/img/+.png'/>
    <OfficeDetails office={office} ads={ads} premium={premium}/>
    <Footer/>
    </div>
  )
}

export default SingleOffiece



export async function getServerSideProps(context){

  const { id } = context.params;
  let ads
  let premium
  let office
  if (id) {
      await axios.get(`https://stagingapi.aqarifinder.com/api/office/${id}`).then(res=>{
        office= res.data.results.office
        premium=res.data.results.premium
        ads=res.data.results.ads
    
  })
}

  return { props:  {office,ads, premium}  }


}