import React, { useEffect, useState, useContext } from 'react'
import Nav from '../../components/shared/nav/Nav'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/shared/footer/Footer'
import Estat from '../../components/singleEstate/Estat'
import axios from 'axios'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AuthContext } from '../../stores/auth-context'
import { getSession } from 'next-auth/react'

const SingleEstate = ({ data }) => {
  const [withImg, setWithImg] = useState(false)
  const [overlay, setOverlay] = useState(false)
  // const [data,setData]=useState({})
  const authCtx = useContext(AuthContext)

  let { t } = useTranslation();

  // translations

  //nav
  let nav1 = t('home:nav-1')
  let nav2 = t('home:nav-2')
  let nav3 = t('home:nav-3')
  let nav4 = t('home:nav-4')
  let nav5 = t('home:nav-5')
  let nav6 = t('home:nav-6')
  let nav7 = t('home:nav-7')
  let nav8 = t('home:nav-8')
  let nav9 = t('home:nav-9')
  let nav10 = t('home:nav-10')
  let nav11 = t('home:nav-11')

  //banner 
  let bn = t('home:banner')
  let navOb = {
    nav1,
    nav2,
    nav3,
    nav4,
    nav5,
    nav6,
    nav7,
    nav8,
    nav9,
    nav10,
    nav11
  }

  //footer
  let fo1 = t('home:footer')
  //addads
  let add1 = t('add-ads:ad-1')
  let add2 = t('add-ads:ad-2')
  let add3 = t('add-ads:ad-3')
  let add4 = t('add-ads:ad-4')
  let add5 = t('add-ads:ad-5')
  let add6 = t('add-ads:ad-6')
  let add7 = t('add-ads:ad-7')
  let add8 = t('add-ads:ad-8')
  let add9 = t('add-ads:ad-9')
  let add10 = t('add-ads:ad-10')
  let add11 = t('add-ads:ad-11')
  let add12 = t('add-ads:ad-12')
  let add13 = t('add-ads:add-13')
  let edit = t('add=ads:edit')

  //add-sh
  let adSh1 = t('add-ads:ad-sh-1')
  let adSh2 = t('add-ads:ad-sh-2')
  let adSh3 = t('add-ads:ad-sh-3')
  let adBtn = t('add-ads:add-btn')


  let addAdsOb = {
    add1, add2, add3, add4, add5, add6, add7, add8, add9, add10, add11, add12, adSh1, adSh2, adSh3, adBtn, add13, edit
  }


  useEffect(() => {


    data.images ?
      setWithImg(true) : setWithImg(false)
  }, [])


  let content = '/assets/img/estate.svg'
  return (
    <div className={`single-estat${overlay ? 'overlay' : ""} `}>
      <Nav navOb={navOb} />
      <Banner content={content} bn={bn} />
      <Estat withImg={withImg} data={data} setOverlay={setOverlay} addAdsOb={addAdsOb} />
      <Footer fo1={fo1} />
    </div>
  )


}


export default SingleEstate;

export async function getServerSideProps(context) {
  let data;
  let { locale } = context
  const { id } = context.params;
  let session = getSession(context)

  if (id) {
    await axios.get(`https://stagingapi.aqarifinder.com/api/ads/${id}`, { headers: { 'Authorization': session.data != null ? session.data.id : null, 'lang': locale } }).then((res) => {

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
        images: res.data.results.images.length > 0 ? res.data.results.images : false,
        add_id: res.data.results.id,
        allData: res.data.results,
        user_id: res.data.results.user_id
      }
    })
  }

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['home', 'signUp', 'add-ads'])) //pass it to the page props
    }
  }
}



// export async function getServerSideProps({locale}) {
//   return { props: {...(await serverSideTranslations(locale, ['home','signUp']))} }
// }
