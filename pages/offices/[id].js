import React, { useState, useEffect } from 'react'
import OfficeDetails from '../../components/offices/OfficeDetails'
import Footer from '../../components/shared/footer/Footer'
import Nav from '../../components/shared/nav/Nav'
import axios from 'axios'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const SingleOffiece = ({ ads, office, premium }) => {
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

  //adds section
  let ad1 = t('home:ads-1')
  let ad2 = t('home:ads-2')
  let ad3 = t('home:ads-3')

  let adsOb = {
    ad1,
    ad2,
    ad3
  }

  //offices
  let of1 = t('offices:office-1')
  let of2 = t('offices:office-2')
  let of3 = t('offices:office-3')
  let ofOb = {
    of1, of2, of3, of4: ad3
  }

  return (
    <div style={{ height: "100%" }}>
      <Nav navOb={navOb} logo='/assets/img/logo.svg' icon='/assets/img/+.png' />
      <OfficeDetails ofOb={ofOb} office={office} ads={ads} premium={premium} />
      <Footer fo1={fo1} />
    </div>
  )
}

export default SingleOffiece



export async function getServerSideProps(context) {
  let { locale } = context
  const { id } = context.params;
  let ads
  let premium
  let office
  if (id) {
    await axios.get(`https://stagingapi.aqarifinder.com/api/office/${id}`).then(res => {
      office = res.data.results.office
      premium = res.data.results.premium
      ads = res.data.results.ads

    })
  }

  return { props: { office, ads, premium, ...(await serverSideTranslations(locale, ['home', 'offices'])) } }
}


