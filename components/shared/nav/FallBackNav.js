import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { AuthContext } from '../../../stores/auth-context';
import { useSession, signOut } from 'next-auth/react';
import onClickOutside from 'react-onclickoutside';
import BackBtn from '../../BackBtn';
import axios from 'axios';

const FallBackNav = ({ setShowNav, setMvoeArrow, movearrow, navOb }) => {
    const route = useRouter()
    const [switchlang, setSwitchLang] = useState(false)
    const [login, setLogin] = useState(false)
    const session = useSession()
    const authCtx = useContext(AuthContext)



    FallBackNav.handleClickOutside = () => {
        setMvoeArrow(false)
        setShowNav(false)
    }


    return (

        <div className='drop-nav-container'>
            <ul className='fallBack-drop-nav' style={{
                height: switchlang ? "452px" : "402px",
            }}>
                <Link href="/" className='main-nav-item'>

                    <li className={`${route.asPath === "/" ? "activeNavFall" : ""}`}>
                        <span
                            className={`${route.asPath === "/" ? "active" : ""}`}
                        >

                            <img src="/assets/img/main-nav.svg" alt="" />
                            {navOb.nav1}</span>
                    </li>
                </Link>


                {/* <li className={`${route.asPath === "/offices" || route.asPath === 'offices/singleOffec' ? "activeNavFall" : ""}`}>
        <Link href="/offices" className='main-nav-item'><span
            className={`${route.asPath === "/offices" || route.asPath === 'offices/singleOffec' ? "active" : ""}`}
        > <img src="/assets/img/office-nav.svg" alt="" />

{navOb.nav2}</span></Link>

    </li> */}
                  <Link style={{ cursor:'pointer'}} href="/packages" className='main-nav-item'>
                <li style={{ cursor:'pointer'}} className={`${route.asPath === "/packages" ? "activeNavFall" : ""}`}>
                  
                        <span
                        className={`${route.asPath === "/packages" ? "active" : ""}`}
                    >
                        <img src="/assets/img/packegIcon-nav.svg" alt="" />

                        {navOb.nav3}</span>

                    </li>
                    </Link>
                <li onClick={() => {
                    setMvoeArrow(!movearrow)
                    setSwitchLang(!switchlang)
                }
                } style={{
                    // marginBottom: switchlang && "80px",
                    backgroundColor: switchlang && "#EDAA43",
                    cursor: "pointer",
                    position: "relative",
                    padding: "unset",

                }}>
                    <span style={{ width: '100%', padding: '7px' }}>
                        <img src="/assets/img/lang-nav.svg" alt="" />
                        {navOb.nav8}
                        <img src='/assets/img/Stroke 2.svg' alt='' className='lang-arr' />


                    </span>
                    <ul className='switch-lang'
                        style={{
                            display: !switchlang ? 'none' : "",
                            height: "96.6px",
                            width: "100%",



                        }}>

                        {/* {
                                route.locales.map((locale) => (
                                    <Link key={locale} href={route.asPath} locale={locale}>
                                        <li className='arabic-lang'>
                                            {locale == "ar" && "عربي"}
                                            {locale == "en" && "English"}
                                        </li>
                                    </Link>

                                ))
                            } */}
                        <Link Link style={{ textDecoration: "none", cursor:'pointer' }} href={route.asPath}
                            locale='en'>
                            <a className='fall-lang' style={{
                                textDecoration: "none",
                                fontSize: '16px',
                                paddingTop: '3px'
                            }}>
                                <li style={{ textDecoration: "none" }}>

                                    English

                                </li>
                            </a>
                        </Link>

                        <Link Link style={{ textDecoration: "none" }} href={route.asPath}
                            locale='ar'>
                            <a className='fall-nav' style={{
                                textDecoration: "none",
                                fontSize: '15px',
                                paddingTop: '11px'
                            }}>
                                <li style={{ textDecoration: "none", fontSize: "16px" }}>
                                    عربي
                                </li>
                            </a>
                        </Link>

                    </ul>
                </li>

                <Link href={session.data !=null?"/profile":"/signIN"} className='main-nav-item'>
                    <li className={`${route.asPath === "/signIN" ? "activeNavFall" : ""}`}
                        onClick={() => setLogin(true)}>
                   
                        <span
                        className={`${route.asPath === "/signIN" ? "active" : ""}`}

                    >
                        {session.data ? <img src='/assets/img/profile-nav.svg' /> : ""}
                        {session.data ? navOb.nav7 : navOb.nav4}</span>

                    </li>
                    </Link>

                {
                    session.data ?
                        
                            <li   onClick={() => {

                                if (session.data) {
                                    axios.post('https://stagingapi.aqarifinder.com/api/user/logout',
                                        { headers: { 'Authorization': session.data.id } })
                                
                                    signOut()
                                }
                        }}
                            className={`${route.asPath === "/signUp" ? "activeNavFall" : ""}`}>
                            <div className='main-nav-item'><span
                            className={`${route.asPath === "/signUp" ? "active" : ""}`}
                           

                        >
                            <img src='/assets/img/Log out.svg' />

                            {navOb.nav6}</span></div>
                        </li> :
                         <Link href="/signUp" className='main-nav-item'><span
                         className={`${route.asPath === "/signUp" ? "active" : ""}`}
                        >
                            <li>
                            {navOb.nav5}
                            </li>
                         </span>
                        </Link>
                        
                   
                }
                {/* <li className={`${route.asPath === "/signUp" ? "activeNavFall" : ""}`}>
                    {session.data ?
                        <div className='main-nav-item'><span
                            className={`${route.asPath === "/signUp" ? "active" : ""}`}
                           

                        >
                            <img src='/assets/img/Log out.svg' />

                            {navOb.nav6}</span></div> :
                        <Link href="/signUp" className='main-nav-item'><span
                            className={`${route.asPath === "/signUp" ? "active" : ""}`}
                        >
                            {navOb.nav5}</span></Link>
                    }



                </li> */}


            </ul>



        </div>


    )
}


const clickOutsideConfig = {
    handleClickOutside: () => FallBackNav.handleClickOutside,
};

export default onClickOutside(FallBackNav, clickOutsideConfig);