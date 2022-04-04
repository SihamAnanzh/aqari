import React, { useEffect } from 'react'
import Packges from '../components/packges/Packges'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from 'next/router';
import axios from 'axios';
import BackBtn from '../components/backBtn';


const PackgesAdd = ({ data }) => {
  let { t } = useTranslation();
  const route = useRouter

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
    nav11,
    pa1: t('packages:package-1'),
    pa2: t('packages:package-2')

  }

  //footer
  let fo1 = t('home:footer')




  return (
    <div>
      <Head>
        <title>{route.locale == 'ar' ? "الباقات" : "Packages"}</title>
        <meta name="description" content={data.results.map((add) => {
          let content = add.title + ","
          return content

        })} />
        <meta name="description" content={data.results.map((add) => {
          let content = add.subtitle + ","
          return content

        })} />
      </Head>
      <Packges data={data.results} navOb={navOb} fo1={fo1} />
      <BackBtn/>
    </div>
  )
}

export default PackgesAdd



export async function getServerSideProps({ locale }) {

  const res = await fetch('https://stagingapi.aqarifinder.com/api/package/list', { headers: { lang: locale } })
  const data = await res.json()


  return { props: { data, ...(await serverSideTranslations(locale, ['home', 'packages'])) } }
}
