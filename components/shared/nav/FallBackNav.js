import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const FallBackNav = ({setShowNav,setMvoeArrow,movearrow}) => {
    const route = useRouter()
    const [switchlang, setSwitchLang]=useState(false)
    const [login, setLogin]=useState(false)

  return (

    <div className='drop-nav-container'>
      <ul className='fallBack-drop-nav' style={{
          height:switchlang?"452px":"402px",
      }}>
    
    <li className={`${route.asPath === "/" ? "activeNavFall" : ""}`}>
        
        <Link href="/" classNamem='main-nav-item'><a
            className={`${route.asPath === "/" ? "active" : ""}`}
        >
            <img src="/assets/img/main-nav.svg" alt="" />
            الرئيسية</a></Link>

    </li>
    <li className={`${route.asPath === "/offices" || route.asPath === 'offices/singleOffec' ? "activeNavFall" : ""}`}>
        <Link href="/offices" classNamem='main-nav-item'><a
            className={`${route.asPath === "/offices" || route.asPath === 'offices/singleOffec' ? "active" : ""}`}
        > <img src="/assets/img/office-nav.svg" alt="" />

            المكاتب</a></Link>

    </li>
    <li className={`${route.asPath === "/packges" ? "activeNavFall" : ""}`}>
        <Link href="/packges" classNamem='main-nav-item'><a
            className={`${route.asPath === "/packges" ? "active" : ""}`}
        >
       <img src="/assets/img/packegIcon-nav.svg" alt="" />

            الباقات</a></Link>

    </li>
    <li  style={{
        marginBottom:switchlang&&"80px",
        backgroundColor:switchlang &&"#EDAA43",
        position:"relative"
    }}>
        <a onClick={()=>{
            setMvoeArrow(!movearrow)
            setSwitchLang(!switchlang)}
            }>
        <img src="/assets/img/lang-nav.svg" alt=""  />
        اللغة      
         <img src='/assets/img/Stroke 2.svg' alt='' className='lang-arr'/>

        <ul className='switch-lang'
        style={{
            display:!switchlang?'none':"",
            height:"83px",
            marginRight:"-5px",
            marginLeft:"-5px"
        
           
            
    }}>
                 <li >عربي</li>
                 <li>English</li>
             </ul>
        </a>
    </li>


    <li className={`${route.asPath === "/signIN" ? "activeNavFall" : ""}`} onClick={()=>setLogin(true)}>
        <Link href="/signIN" classNamem='main-nav-item'><a
            className={`${route.asPath === "/signIN" ? "active" : ""}`}

        >
            {login ? <img src='/assets/img/profile-nav.svg'/>:""}
            {login?"الملف الشحصي":"دخول"}</a></Link>

    </li>
  
    <li className={`${route.asPath === "/signUp" ? "activeNavFall" : ""}`}>
        <Link href="/signUp" classNamem='main-nav-item'><a
            className={`${route.asPath === "/signUp" ? "active" : ""}`}
          
        >
              {login ? <img src='/assets/img/Log out.svg'/>:""}

            {login?"تسجيل خروج":"تسجيل"}</a></Link>

    </li>
    
    
       </ul>



</div>


  )
}

export default FallBackNav