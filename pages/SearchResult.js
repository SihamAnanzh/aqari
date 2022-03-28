import React, { useContext } from 'react'
import SearchResultComponents  from '../components/searchResult/SearchResult'
import NoResults from '../components/searchResult/NoResults'
import {FilterContext} from '../stores/filter'
import {useTranslation} from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const SearchResult = (props) => {
   const filterCtx=useContext(FilterContext)

   let { t } = useTranslation();
    
   // translations
   
   //nav
   let nav1=t('home:nav-1')
   let nav2=t('home:nav-2')
   let nav3=t('home:nav-3')
   let nav4=t('home:nav-4')
   let nav5=t('home:nav-5')
   let nav6=t('home:nav-6')
   let nav7=t('home:nav-7')
   let nav8=t('home:nav-8')
   let nav9=t('home:nav-9')
   let nav10=t('home:nav-10')
   let nav11=t('home:nav-11')
   
   //banner 
   let bn=t('home:banner')
   let navOb={
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
let fo1=t('home:footer')

//adds section
let ad1=t('home:ads-1')
let ad2=t('home:ads-2')
let ad3=t('home:ads-3')
let ad4=t('home:ads-4')
let ad5=t('home:ads-5')

let adsOb={
  ad1,
  ad2,
  ad3,
  ad4,
  ad5
}


  return (
    <>
         {              
         filterCtx.addsResults.premium_ads&&
         filterCtx.addsResults.premium_ads.length == 0 &&
         filterCtx.addsResults.ads &&
         filterCtx.addsResults.ads.length == 0?
         <NoResults navOb={navOb} fo1={fo1} adsOb={adsOb}/>:
         <SearchResultComponents  navOb={navOb} fo1={fo1} adsOb={adsOb} /> 
    }
    </>
  )
}

export default SearchResult



export async function getServerSideProps({locale}) {
  return { props: {...(await serverSideTranslations(locale, ['home','signUp']))} }
}
