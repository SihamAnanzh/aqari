import React from 'react'
import ConfirmPasswrod from '../../../components/singIN/ConfirmPasswrod'
import Nav from '../../../components/shared/nav/Nav'
import Footer from '../../../components/shared/footer/Footer'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Index = () => {

  let { t } = useTranslation();

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
  //singin
  let continueWrod =t('signin:continue')
  let sn2 = t('signin:sign-2')
  let sn3 = t('signin:sign-3')
  let sn4 = t('signin:sign-4')
  let newPasswrod = t('signin:newPassword')
  let reset=t('signin:reset')

  let sginOb = {
    sn2, sn3, sn4,continueWrod,newPasswrod,reset
  }


  return (
    <>
      <Nav navOb={navOb} />
      <ConfirmPasswrod sginOb={ sginOb}/>
      <Footer fo1={fo1} />
    </>
  )
}

export default Index


export async function getServerSideProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['home', 'signUp','signin'])) } }
}
