import React from 'react'
import { ContactUs } from '../components/contactUs/ContactUs'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from 'next/router'
import Head from 'next/head';
import BackBtn from '../components/BackBtn';

const Contactus = () => {
  const route = useRouter()
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
  let footerDesc=t('home:footer-desc')
  let contactOb = {
    call: t('contactus:callUs'),
    paragaph: t('contactus:paragaph'),
    email: t('contactus:email'),
    phone: t('contactus:phone'),
    message: t('contactus:message'),
    send: t('contactus:send'),
    name: t('contactus:name'),

    footerDesc

  }


  return (
    <>
      <Head>
        <title>{route.locale == 'ar' ? 'تواصل معنا' : "Contact Us"}</title>
      </Head>
      <ContactUs navOb={navOb} fo1={fo1} contactOB={contactOb} />
      <BackBtn/>
    </>
  )
}

export default Contactus



export async function getServerSideProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['home', 'signUp', 'contactus'])) } }
}
