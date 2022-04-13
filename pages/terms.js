import React from 'react'
import Nav from '../components/shared/nav/Nav'
import Footer from '../components/shared/footer/Footer'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from 'next/head';
import TermsComponents from '../components/TermsComponents';
import { useRouter } from 'next/router';
const Terms = () => {
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


    //sginuP
    let su1 = t('signUp:reg-1')
    let su2 = t('signUp:reg-2')
    let su3 = t('signUp:reg-3')
    let su4 = t('signUp:reg-4')
    let su5 = t('signUp:reg-5')
    let su6 = t('signUp:reg-6')
    let su7 = t('signUp:reg-7')

    let sginUpOb = {
        su1, su2, su3, su4, su5, su6, su7
    }
    return (
        <div>
            <Head>
                <title>{ route.locale=='en'?"Terms & Conditions":"الشروط والقواعد"} </title>
                <meta name="description" content="" />
            </Head>
            <Nav navOb={navOb} />
            <TermsComponents/>
            <Footer fo1={fo1} />
        </div>
    )
}

export default Terms




export async function getServerSideProps({ locale }) {
    return { props: { ...(await serverSideTranslations(locale, ['home', 'signUp', 'contactus'])) } }
}
