import React ,{useState,useEffect}from 'react'
import OfficeDetails from '../../components/offices/OfficeDetails'
import Footer from '../../components/shared/footer/Footer'
import Nav from '../../components/shared/nav/Nav'
import axios from 'axios'
const singleOffiec = ({ads, office,premium}) => {

  return (
    <>
    <Nav logo='/assets/img/logo.svg' icon='/assets/img/+.png'/>
    <OfficeDetails office={office} ads={ads} premium={premium}/>
    <Footer/>
    </>
  )
}

export default singleOffiec



export async function getServerSideProps(context){
  console.log(context.query) 
  let id=context.query.id
  let office
  let ads
  let premium
    await axios.get(`https://stagingapi.aqarifinder.com/api/office/${id}`).then(res=>{
    console.log(res.data.results);
    office= res.data.results.office
    premium=res.data.results.premium
    ads=res.data.results.ads

})

  return { props:  {office,ads, premium}  }


}