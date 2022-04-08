import React, { useState, useEffect, useContext } from 'react'
import PremuimAdd from '../adds/PremuimAdd'
import Footer from '../shared/footer/Footer'
import Nav from '../shared/nav/Nav'
import Add from '../adds/Add'
import { FilterContext } from '../../stores/filter';
import { TranslateContext } from '../../stores/translate-context';
import BackBtn from '../BackBtn'
import { useRouter } from 'next/router'


const SearchResultComponents = ({ navOb, fo1, adsOb }) => {
  const [premuimAdds, setPremuimAdds] = useState([])
  const [latestData, setLeastestAdd] = useState([])
  const filterCtx = useContext(FilterContext)
  const [visible, setVisible] = useState(5)
  const route=useRouter()

  const loadMoreHandler = () => {
    setVisible(pre => pre + 5)
  }
  useEffect(() => {
    filterCtx.addsResults.premium_ads && filterCtx.addsResults.premium_ads.map((adds) => {
      let data = {
        add_id: adds.id,
        user_id: adds.user_id,
        images: adds.images,
        title: adds.title,
        address: adds.region.country.title + " " + adds.region.title,
        price: adds.price,
        time: adds.issue_date_string.slice(0,5),

        views: adds.view_count,
        whatsApp: adds.whatsapp,
        phone: adds.phone,
        disc: adds.desc,
        lat: adds.lat,
        lng: adds.lng,
        singleEstatData: {
          id: adds.id,
          images: adds.images,
          title: adds.title,
          address: adds.region.country.title + " " + adds.region.title,
          discriptions: adds.desc,
          city: adds.region.title,
          space: adds.area,
          interface: adds.front,
          price: adds.price,
          autoNumber: adds.auto_number,
          phone: adds.phone,
          whatsApp: adds.whatsapp,
          lat: adds.lat,
          lng: adds.lng,
          views: adds.view_count,
          time: adds.issue_date_string.slice(0,5),

          user_id: adds.user_id,

        }
      }
      setPremuimAdds(pre => [...pre, data])
      console.log(premuimAdds);

    })
  }, [])

  useEffect(() => {

    filterCtx.addsResults.ads && filterCtx.addsResults.ads.map((adds) => {
      let data = {
        add_id: adds.id,
        user_id: adds.user_id,
        images: adds.images,
        title: adds.title,
        address: adds.region.country.title + " " + adds.region.title,
        price: adds.price,
        time: adds.issue_date_string.slice(0,5),

        views: adds.view_count,
        whatsApp: adds.whatsapp,
        phone: adds.phone,
        disc: adds.desc,
        lat: adds.lat,
        lng: adds.lng,
        singleEstatData: {
          id: adds.id,
          images: adds.images,
          title: adds.title,
          address: adds.region.country.title + " " + adds.region.title,
          discriptions: adds.desc,
          city: adds.region.title,
          space: adds.area,
          interface: adds.front,
          price: adds.price,
          autoNumber: adds.auto_number,
          phone: adds.phone,
          whatsApp: adds.whatsapp,
          lat: adds.lat,
          lng: adds.lng,
          views: adds.view_count,
          time: adds.issue_date_string.slice(0,5),

          user_id: adds.user_id,

        }
      }
      setLeastestAdd(pre => [...pre, data])

    })

    console.log(latestData);
    console.log(filterCtx.addsResults);
  }, [])


useEffect(()=>{

  console.log(filterCtx);
},[])


  return (
    <div className='results-container'>
      <Nav navOb={navOb} />
      <div className='results'>
        <h2 className='results-heading'>
          {`${filterCtx.typeName}
           ${!filterCtx.rent ?
             route.locale == 'ar' ? 'للإيجار ': "Rent" :
             route.locale=='ar'?'للبيع':"Selling"}
            ${route.locale == 'ar'?"في":"in"}
             ${[...filterCtx.areaName]}`}
            </h2>
        {premuimAdds.length !== 0 &&
          <div className="premium-adds-results">
            <h1 className='premium-title'>{adsOb.ad1}</h1>
            {premuimAdds && premuimAdds.map((premiumAddsData) => (
              <PremuimAdd adsOb={adsOb} singleEstate={premiumAddsData.singleEstatData} key={premiumAddsData.add_id} add_id={premiumAddsData.add_id} img={premiumAddsData.img} title={premiumAddsData.title} address={premiumAddsData.address} price={premiumAddsData.price} time={premiumAddsData.time} views={premiumAddsData.views} whatsApp={premiumAddsData.whatsApp} phone={premiumAddsData.phone} disc={premiumAddsData.disc} />

            ))
            }
          </div>
        }

        <div className="adds-results">
          <h1 className='premium-title'>{adsOb.ad2}</h1>
          {
            latestData && latestData.slice(0, visible).map((addsData) => (
              <Add adsOb={adsOb} singleEstate={addsData.singleEstatData} add_id={addsData.add_id} key={addsData.add_id} disc={addsData.disc} time={addsData.time} price={addsData.price} address={addsData.address} title={addsData.title} img={addsData.img} />

            ))
          }
        </div>

        <span className="end-results">{adsOb.ad4}
        </span>
      </div>
      <BackBtn/>
      <Footer fo1={fo1} />
    </div>
  )
}

export default SearchResultComponents