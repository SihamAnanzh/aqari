import { createContext, useState } from "react";

export const  TranslateContext=createContext({
    navOb:{},
     bn:"",
     fo:"",
     setAdsOb:(vl)=>{},
     setNavOb:(vl)=>{},
     setBn:(vl)=>{},
     setFo:(vl)=>{},
     adsOb:{}
})


export  const TranslateProvider=(props)=>{
    const [nav,setNav]=useState({})
    const [footer,setFooter]=useState()
    const [banner,setBanner]=useState()
    const [ads,setAds]=useState({})



    const navVl=(vl)=>{
        setNav(vl)
        console.log(vl);
    }
    const adsVl=(vl)=>setAds(vl)
    const foVl=(vl)=>setFooter(vl)
    const bnVl=(vl)=>setBanner(vl)

    const translateContextValue={
        navOb:nav,
        bn:banner,
        fo:footer,
        adsOb:ads,
        setAdsOb:navVl,
        setNavOb:adsVl,
        setBn:foVl,
        setFo:bnVl,

    }

    return (
        <TranslateContext.Provider value={translateContextValue}>
            {props.children}
        </TranslateContext.Provider>
    )

}