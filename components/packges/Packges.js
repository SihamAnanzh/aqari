import React ,{useState,useEffect}from 'react'
import Nav from '../shared/nav/Nav'
import Packge from './Packge'
import Footer from '../shared/footer/Footer'
const Packges = ({data,fo1,navOb}) => {
const [packageData,setPacakgeData]=useState([])


useEffect(() => {
  data.map((data)=>{
    let datapack={ 
        id:data.id,
        titleOne:data.title,
        titleTwo:data.subtitle,
          logo:data.logo_url,
          packgeId:data.packages.id,
          packageTitle:data.packages.title,
           currencyTitle:  data.packages.length !==0 && data.packages[0].currency.title,
           currencyCode:  data.packages.length !==0 && data.packages[0].currency.code,
           price: data.packages.length !==0 && data.packages[0].price
         

    }
    console.log(data);
  setPacakgeData(pre=>[...pre,datapack])
  })
}, []);

  return (
    <>
    
    <Nav navOb={navOb}/>
    <div className='packge-contaier'>
      <h1 className='packge-heading'>{navOb.pa1}</h1>
      <div className='pakges'>
        {
          packageData.map((pack)=>(
            <Packge  btn={navOb.pa2} price={pack.price} logo={pack.logo} currencyTitle={pack.currencyTitle} key={pack.id} titleOne={pack.titleOne} titleTwo={pack.titleTwo} currencyId={pack.currencyId}/>

          ))
        }
 
      </div>
    </div>
    <Footer fo1={fo1}/>
    </>
  )
}

export default Packges