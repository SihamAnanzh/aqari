import React, { useState, useEffect, useContext } from 'react'
import Nav from '../components/shared/nav/Nav'
import Banner from '../components/banner/Banner'
import Footer from '../components/shared/footer/Footer'
import Adds from '../components/adds/Adds'
import Loader from '../components/loader/Loader'
import MainSection from '../components/mainSection/MainSection'
import axios from 'axios'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession, getSession } from 'next-auth/react'
import Head from "next/head";
import { useRouter } from 'next/router'
import FACEBOOK_PIXEL_1 from '../components/Pixle/facebook/pixel-1'

const Index = ({ prem, latest, services, Request,name }) => {
  const [premuimAdds, setPremuimAdds] = useState([])
  const [latestData, setLeastestAdd] = useState([])
  const route=useRouter()
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


  //searchSection
  let sh1 = t('home:search-1')
  let sh2 = t('home:search-2')
  let sh3 = t('home:search-3')
  let sh4 = t('home:search-4')
  let sh5 = t('home:search-5')
  let sh6 = t('home:search-6')
  let sh7 = t('home:search-7')
  let sh8 = t('home:search-title-city')
  let sh9 = t('home:search-title-service')
  let sh10 = t('home:search-title-type')
  let dropTitle = t('home:drop-down-title')
  let dropSubTitle=t('home:drop-down-subTitle')

  let searchOb = {
    sh1,
    sh2,
    sh3,
    sh4,
    sh5,
    sh6,
    sh7,
    sh8,
    sh9, sh10,
    dropTitle,
    dropSubTitle
    
  }
  console.log(searchOb);

  //footer
  let fo1 = t('home:footer')


  
  //adds section
  let ad1 = t('home:ads-1')
  let ad2 = t('home:ads-2')
  let ad3 = t('home:ads-3')
  let premium = t('home:premium')
  let day = t('home:day')
  let priceCode=t('home:priceCode')
  let adsOb = {
    ad1,
    ad2,
    ad3,
    premium,
    day,
    priceCode
  }


  useEffect(() => {
    console.log(prem);
    prem && prem.map((adds) => {
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
        regionId: adds.region_id,
        is_premium: adds.is_premium,
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
          regionId: adds.region_id,
          is_premium: adds.is_premium,
          isFav: adds.is_fav,
          regionsString: adds.regions_string,
          category: adds.category.title,
          adType: adds.ad_type.title



        }
      }
      console.log(data.time);
      setPremuimAdds(pre => [...pre, data])

    })
  }, [prem])

  useEffect(() => {
    latest && latest.map((adds) => {
      let data = {
        add_id: adds.id,
        user_id: adds.user_id,
        images: adds.images.length == 0 ? '/assets/img/home.jpg' : adds.images,
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
        regionId: adds.region_id,
        is_premium: adds.is_premium,
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
          regionId: adds.region_id,
          is_premium: adds.is_premium,
          isFav: adds.is_fav,
          regionsString: adds.region.title,
          category: adds.category.title,
          adType: adds.ad_type.title


        }
      }

      setLeastestAdd(pre => [...pre, data])


    })
  }, [latest])


  return (

    <>
    
      <Head>

    
        <title>{route.locale == "ar"?"عقاري":"akariFinder"}</title>
        <meta name="description" content={premuimAdds.map((add) => {
          let content = add.disc + ","
          return content

        })} />
        <meta name="description" content={latestData.map((add) => {
          let content = add.disc + ","
          return content

        })} />
      </Head>
      <Nav navOb={navOb} homePage={true}/>
      <Banner bn={bn} />
      <MainSection searchOb={searchOb} />
      <Adds latestData={latestData} premuimAdds={premuimAdds} adsOb={adsOb} />
      <Footer  fo1={fo1} />

    </>
  )
}

export default Index


export async function getServerSideProps(context) {
  // console.log("INSIDE SERVER SIDE", context.req);
  let prem;
  let latest;
  let { locale } = context
  const session = await getSession(context);
  console.log(session);
  let data = await axios.get('https://stagingapi.aqarifinder.com/api/ads/premium/list?', {
    headers: {
      "lang": locale,
    },
  })
    .then(res => {
      // console.log(res.data.results);
      // res.data.status.code === 200 &&console.log('success')
      prem = res.data.results

    })

  let latestData = await axios.get('https://stagingapi.aqarifinder.com/api/ads/latest/list', {
    headers: {
      "lang": locale
    },
  })
    .then(res => {

      // res.data.status.code === 200 &&console.log('success')
      latest = res.data.results
      console.log( locale);


    })





  // Pass data to the page via props
  return { props: { prem, latest, ...(await serverSideTranslations(locale, ['home'])) } }
}
