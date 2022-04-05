import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { AuthContext } from '../../../stores/auth-context';
import { useSession, signOut } from 'next-auth/react';
import onClickOutside from 'react-onclickoutside';
import BackBtn from '../../BackBtn';

const FallBackNav = ({ setShowNav, setMvoeArrow, movearrow, navOb }) => {
    const route = useRouter()
    const [switchlang, setSwitchLang] = useState(false)
    const [login, setLogin] = useState(false)
    const session = useSession()
    const authCtx = useContext(AuthContext)

    
  
    FallBackNav.handleClickOutside = () => {
        setMvoeArrow(false)
        setShowNav(false)
        console.log('click');
    }

    
    return (

        <div className='drop-nav-container'>
            <ul className='fallBack-drop-nav' style={{
                height: switchlang ? "452px" : "402px",
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
                <li className={`${route.asPath === "/packages" ? "activeNavFall" : ""}`}>
                    <Link href="/packages" className='main-nav-item'><span
                        className={`${route.asPath === "/packages" ? "active" : ""}`}
                    >
                        <img src="/assets/img/packegIcon-nav.svg" alt="" />

                        {navOb.nav3}</span></Link>

                </li>
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
                        <Link Link style={{ textDecoration: "none" }} href={route.asPath}
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
                                paddingTop:'11px'
                            }}>
                                <li style={{ textDecoration: "none",fontSize:"16px" }}>
                                    عربي
                                </li>
                            </a>
                        </Link>

                    </ul>
                </li>


                <li className={`${route.asPath === "/signIN" ? "activeNavFall" : ""}`} onClick={() => setLogin(true)}>
                    <Link href={session.data ? "/profile" : "/signIN"} className='main-nav-item'><span
                        className={`${route.asPath === "/signIN" ? "active" : ""}`}

                    >
                        {session.data ? <img src='/assets/img/profile-nav.svg' /> : ""}
                        {session.data ? navOb.nav7 : navOb.nav4}</span></Link>

                </li>

                <li className={`${route.asPath === "/signUp" ? "activeNavFall" : ""}`}>
                    {session.data ?
                        <div className='main-nav-item'><span
                            className={`${route.asPath === "/signUp" ? "active" : ""}`}
                            onClick={() => {

                                if (session) {
                                    signOut()
                                }
                            }}

                        >
                            <img src='/assets/img/Log out.svg' />

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


const clickOutsideConfig = {
    handleClickOutside: () => FallBackNav.handleClickOutside,
  };
  
  export default onClickOutside(FallBackNav, clickOutsideConfig);