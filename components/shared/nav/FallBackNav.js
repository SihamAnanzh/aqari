import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const FallBackNav = ({setShowNav}) => {
    const route = useRouter()
    const [switchlang, setSwitchLang]=useState(false)
    const [login, setLogin]=useState(false)

  return (

    <div className='drop-nav-container'>
      <ul className='fallBack-drop-nav'>
    
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
        backgroundColor:switchlang &&"#EDAA43"
    }}>
        <a onClick={()=>setSwitchLang(!switchlang)}>
        <img src="/assets/img/lang-nav.svg" alt=""  />اللغة
        <ul className='switch-lang'
        style={{
            display:!switchlang?'none':"",
            height:"83px",
            marginRight:"-5px",
        
           
            
    }}>
                 <li >العربية</li>
                 <li>English</li>
             </ul>
        </a>
    
    </li>


    <li className={`${route.asPath === "/profile" ? "activeNavFall" : ""}`} onClick={()=>setLogin(true)}>
        <Link href="/profile" classNamem='main-nav-item'><a
            className={`${route.asPath === "/signIN" ? "active" : ""}`}

        >
            {!login?"الملف الشحصي":"دخول"}</a></Link>

    </li>
  
    <li className={`${route.asPath === "/signUp" ? "activeNavFall" : ""}`}>
        <Link href="/signUp" classNamem='main-nav-item'><a
            className={`${route.asPath === "/signUp" ? "active" : ""}`}
        >{login?"تسجيل خروج":"تسجيل"}</a></Link>

    </li>
    
    
       </ul>



</div>


  )
}

export default FallBackNav