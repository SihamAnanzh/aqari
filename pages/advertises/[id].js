import React, { useEffect, useState } from 'react'
import Nav from '../../components/shared/nav/Nav'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/shared/footer/Footer'
import Estat from '../../components/singleEstate/Estat'
import axios from 'axios'


const SingleEstate = ({ data }) => {
  const [withImg, setWithImg] = useState(false)
  const [overlay, setOverlay] = useState(false)

  useEffect(() => {
    data.images ?
      setWithImg(true) : setWithImg(false)
  }, [])


  let content = '/assets/img/estate.svg'
  return (
    <div className={`single-estat${overlay ? 'overlay' : ""} `}>
      <Nav />
      <Banner content={content} />
      <Estat withImg={withImg} data={data} setOverlay={setOverlay} />
      <Footer />
    </div>
  )


}


export default SingleEstate;

export async function getServerSideProps(context) {
  let data;
  const { id } = context.params;
  if (id) {
    await axios.get(`https://stagingapi.aqarifinder.com/api/ads/${id}`, { headers: { 'lang': "ar" } }).then((res) => {
    
      data = {
        adType: res.data.results.ad_type.title,
        address: res.data.results.region.country.title + " " + res.data.results.region.title,
        autoNumber: res.data.results.auto_number,
        category: res.data.results.category.title,
        city: res.data.results.region.title,
        desc: res.data.results.desc,
        isFav: res.data.results.is_fav,
        is_premium: res.data.results.is_premium,
        lat: res.data.results.lat,
        lng: res.data.results.lng,
        phone: res.data.results.phone,
        price: res.data.results.price,
        interface: res.data.results.front,
        regionId: res.data.results.region.id,
        regionsString: res.data.results.region.title,
        space: res.data.results.area,
        time: "4",
        title: res.data.results.title,
        user_id: res.data.results.user_id,
        views: res.data.results.view_count,
        whatsApp: res.data.results.whatsapp,
        images:res.data.results.images.length > 0 ?res.data.results.images:false,
        add_id:res.data.results.id,
        allData:res.data.results,
        user_id:res.data.results.user_id
      }
    })
  }

  return {
    props: {
      data //pass it to the page props
    }
  }
}
