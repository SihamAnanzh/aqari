import React, { useState, useEffect } from 'react'
import Nav from '../shared/nav/Nav'
import Packge from './Packge'
import Footer from '../shared/footer/Footer'
import BackBtn from '../BackBtn'
const Packges = ({ data, fo1, navOb }) => {
  const [packageData, setPacakgeData] = useState([])


  useEffect(() => {

    console.log(data);
    data.map((data) => {
      let datapack = {
        id: data.id,
        titleOne: data.title,
        titleTwo: data.subtitle,
        logo: data.logo_url,
        packgeId: data.packages.length !== 0 && data.packages[0].id,
        packageTitle: data.packages.title,
        currencyTitle: data.packages.length !== 0 && data.packages[0].currency.title,
        currencyCode: data.packages.length !== 0 && data.packages[0].currency.title,
        price: data.packages.length !== 0 && data.packages[0].price


      }
      setPacakgeData(pre => [...pre, datapack])
    })
  }, []);


  return (
    <>

      <Nav navOb={navOb} />
      <div className='packge-contaier'>
        <div className='pakges'>
        <h1 className='packge-heading'>{navOb.pa1}</h1>

          {
            packageData.map((pack) => (
                pack.id!==3&&<Packge key={pack.id} packgeId={pack.packgeId} btn={navOb.pa2} price={pack.price} logo={pack.logo} currencyTitle={pack.currencyTitle} titleOne={pack.titleOne} titleTwo={pack.titleTwo} currencyId={pack.currencyId} />

            ))
          }

        </div>
      </div>
      <Footer fo1={fo1} />
    </>
  )
}

export default Packges