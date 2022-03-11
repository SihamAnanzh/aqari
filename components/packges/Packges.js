import React ,{useState,useEffect}from 'react'
import Nav from '../shared/nav/Nav'
import Packge from './Packge'
import Footer from '../shared/footer/Footer'
const Packges = ({data}) => {
const [packageData,setPacakgeData]=useState([])


useEffect(() => {
  data.map((data)=>{
    let datapack={ 
        titleOne:data.package_type.title,
        titleTwo:data.package_type.subtitle,
          logo:data.package_type.logo_url,
          packgeId:data.package_type_id,
          currencyId:data.currency.id,
           currencyTitle:data.currency.title,
           price:data.price
         

    }
  setPacakgeData(pre=>[...pre,datapack])
  })
}, []);

  return (
    <>
    
    <Nav/>
    <div className='packge-contaier'>
      <h1 className='packge-heading'>الباقات</h1>
      <div className='pakges'>
        {
          packageData.map((pack)=>(
            <Packge  price={pack.price} logo={pack.logo} currencyTitle={pack.currencyTitle} key={pack.packgeId} titleOne={pack.titleOne} titleTwo={pack.titleTwo} currencyId={pack.currencyId}/>

          ))
        }
 
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Packges