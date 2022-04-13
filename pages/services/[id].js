import React, { useEffect, useState } from 'react'
import Nav from '../../components/shared/nav/Nav'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/shared/footer/Footer'
import Service from '../../components/singleService/Service'
import axios from 'axios'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from 'next/head'
import BackBtn from '../../components/BackBtn'
import { useRouter } from 'next/router'


const SingleServices = ({ data }) => {
  const [withImg, setWithImg] = useState(false)
  const [overlay, setOverlay] = useState(false)
  let { t } = useTranslation();
  const route=useRouter()


  useEffect(() => {
  console.log(data);
    data.images ?
      setWithImg(true) : setWithImg(false)

  }, [])



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

  //adds section
  let ad1 = t('home:ads-1')
  let ad2 = t('home:ads-2')
  let ad3 = t('home:ads-3')

  let adsOb = {
    ad1,
    ad2,
    ad3
  }



  //profile
  let pro1 = t('profile:pro-1')
  let pro2 = t('profile:pro-2')
  let pro3 = t('profile:pro-3')
  let pro4 = t('profile:pro-4')
  let pro5 = t('profile:pro-5')
  let pro6 = t('profile:pro-6')
  let pro7 = t('profile:pro-7')
  let pro8 = t('profile:pro-8')


  let proOb = {
    pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8
  }


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
  let edit = t('home:edit')
  let hour = t('home:hour')
  let priceCode=t('home:priceCode')

  //add-sh
  let adSh1 = t('add-ads:ad-sh-1')
  let adSh2 = t('add-ads:ad-sh-2')
  let adSh3 = t('add-ads:ad-sh-3')
  let adBtn = t('add-ads:add-btn')


  let addAdsOb = {
    add1, add2, add3, add4,
    add5, add6, add7, add8, add9, add10, add11, add12,
    adSh1, adSh2, adSh3, adBtn, add13, edit,hour,priceCode
  }




  let priceWrod = t('add-ads:ad-7')

  let content = '/assets/img/estate.svg'
  return (
    <div className={`single-estat${overlay ? 'overlay' : ""} `}>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.disc} />
      </Head>
      <Nav navOb={navOb} />
      <Banner content={content} />
      <Service addAdsOb={addAdsOb} withImg={withImg} data={data} setOverlay={setOverlay} priceWrod={priceWrod} />
      <Footer fo1={fo1} />
    </div>
  )
}

export default SingleServices

export async function getServerSideProps(context) {
  let data;
  const { locale } = context
  const { id } = context.params;
  if (id) {
    await axios.get(`https://stagingapi.aqarifinder.com/api/services/${id}`, { headers: { 'lang': locale } }).then((res) => {
      data = {
        address: res.data.results.regions_string,
        description: res.data.results.description,
        phone: res.data.results.phone,
        price: res.data.results.price,
        time: res.data.results.issue_date_string.slice(0,5),
        title: res.data.results.title,
        user_id: res.data.results.user_id,
        views: res.data.results.view_count,
        whatsApp: res.data.results.whatsapp,
        images: res.data.results.images.length > 0 ? res.data.results.images : false,
        add_id: res.data.results.id,
        regionId: res.data.results.region_ids,
        serviceType: res.data.results.service_type.title,
        serviceTypeId: res.data.results.service_type.id,
        regionsString: res.data.results.regions_string,

      }
    })
  }


  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['home', 'signUp', 'add-ads']))
    }
  }
}
