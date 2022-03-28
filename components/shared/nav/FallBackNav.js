import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { AuthContext } from '../../../stores/auth-context';
import { useSession ,signOut} from 'next-auth/react';

const FallBackNav = ({setShowNav,setMvoeArrow,movearrow,navOb}) => {
    const route = useRouter()
    const [switchlang, setSwitchLang]=useState(false)
    const [login, setLogin]=useState(false)
    const session=useSession()
 const authCtx=useContext(AuthContext)
  return (

    <div className='drop-nav-container'>
      <ul className='fallBack-drop-nav' style={{
          height:switchlang?"452px":"402px",
      }}>
    
    <li className={`${route.asPath === "/" ? "activeNavFall" : ""}`}>
        
        <Link href="/" className='main-nav-item'><span
            className={`${route.asPath === "/" ? "active" : ""}`}
        >
            <img src="/assets/img/main-nav.svg" alt="" />
            {navOb.nav1}</span></Link>

    </li>
    {/* <li className={`${route.asPath === "/offices" || route.asPath === 'offices/singleOffec' ? "activeNavFall" : ""}`}>
        <Link href="/offices" className='main-nav-item'><span
            className={`${route.asPath === "/offices" || route.asPath === 'offices/singleOffec' ? "active" : ""}`}
        > <img src="/assets/img/office-nav.svg" alt="" />

{navOb.nav2}</span></Link>

    </li> */}
    <li className={`${route.asPath === "/packges" ? "activeNavFall" : ""}`}>
        <Link href="/packges" className='main-nav-item'><span
            className={`${route.asPath === "/packges" ? "active" : ""}`}
        >
       <img src="/assets/img/packegIcon-nav.svg" alt="" />

       {navOb.nav3}</span></Link>

    </li>
    <li  style={{
        marginBottom:switchlang&&"80px",
        backgroundColor:switchlang &&"#EDAA43",
        position:"relative"
    }}>
        <span onClick={()=>{
            setMvoeArrow(!movearrow)
            setSwitchLang(!switchlang)}
            }>
        <img src="/assets/img/lang-nav.svg" alt=""  />
        اللغة      
         <img src='/assets/img/Stroke 2.svg' alt='' className='lang-arr'/>

        <ul className='switch-lang'
        style={{
            display:!switchlang?'none':"",
            height:"96.6px",
            marginRight:"-5px",
            marginLeft:"-5px",
            width:"144.5px",
        
           
            
    }}>
                  
                  {
                                         route.locales.map((locale)=>(
                                             <Link  key={locale} href={route.asPath} locale={locale}>
                                            <li    className='arabic-lang'>
                                                {locale=="ar"&&"عربي"}
                                                {locale=="en"&&"English"}
                                                </li>
                                                </Link>
  
                                         ))
                                     }
             </ul>
        </span>
    </li>


    <li className={`${route.asPath === "/signIN" ? "activeNavFall" : ""}`} onClick={()=>setLogin(true)}>
        <Link href={session.data?"/profile":"/signIN" }className='main-nav-item'><span
            className={`${route.asPath === "/signIN" ? "active" : ""}`}

        >
            {session.data? <img src='/assets/img/profile-nav.svg'/>:""}
            {session.data?navOb.nav7:navOb.nav4}</span></Link>

    </li>
  
    <li className={`${route.asPath === "/signUp" ? "activeNavFall" : ""}`}>
        {session.data?
        <div   className='main-nav-item'><span
            className={`${route.asPath === "/signUp" ? "active" : ""}`}   
            onClick={()=>{
        
                if(session){
                    signOut()
                }
                }}  

        >
              <img src='/assets/img/Log out.svg'/>

              {navOb.nav6}</span></div> :
              <Link href="/signUp" className='main-nav-item'><span
              className={`${route.asPath === "/signUp" ? "active" : ""}`}
          >  
                {navOb.nav5}</span></Link>
             }
     
            

    </li>
    
    
       </ul>



</div>


  )
}

export default FallBackNav