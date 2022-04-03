import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import onClickOutside from 'react-onclickoutside';
import FallBackNav from './FallBackNav'
import { AuthContext } from '../../../stores/auth-context'
import axios from 'axios';
import { useSession, signOut } from 'next-auth/react';
const Nav = ({ logo, icon, navOb }) => {
    const [showLang, setShowLang] = useState(false)
    const [showAddMenu, setAddMenu] = useState(false)
    const [showNav, setShowNav] = useState(false)
    const [login, setLogin] = useState(false)
    const [movearrow, setMvoeArrow] = useState(false)
    const authCtx = useContext(AuthContext)
    const session = useSession()
    const [iconTwo, setIconTwo] = useState(true)
    const route = useRouter()
    Nav.handleClickOutside = () => {
        setAddMenu(false)
        setShowLang(false)
    }




    return (
        <>
            <div className='navbar'>
                <div className='main-nav'>
                    <ul className='main-nav-items'>
                        <li>
                            <Link href='/' className='main-nav-item'>
                                <a className='logo'>
                                    <img className='logo-img' src={logo ? logo : '/assets/img/logo.svg'} alt='logo' />
                                </a>
                            </Link>

                        </li>
                        <li className={`${route.asPath === "/" ? "activeNav" : ""}`}>
                            {/* {route.asPath === "/" ? (<div className="main-nav-item active" style={{color:"#fff"}}>الرئيسية</div>) : */}
                            <Link href="/" className='main-nav-item '>
                                <span
                                    className={`${route.asPath === "/" ? "active" : ""}`}
                                >
                                    {navOb.nav1}
                                </span>
                            </Link>
                            {/* } */}
                        </li>
                        {/* <li className={`${route.asPath === "/offices" || route.asPath === 'offices/singleOffec' ? "activeNav" : ""}`}>
                            <Link href="/offices" className='main-nav-item'><span
                                className={`${route.asPath === "/offices" || route.asPath === 'offices/singleOffec' ? "active" : ""}`}
                                disable={`${route.asPath === "/offices" || route.asPath === 'offices/singleOffec' ? true : false}`}
                            >
                                {navOb.nav2}</span></Link>

                        </li> */}
                        <li className={`${route.asPath === "/packages" ? "activeNav" : ""}`}>
                            <Link href="/packges" className='main-nav-item'><span
                                className={`${route.asPath === "/packages" ? "active" : ""}`}
                            >{navOb.nav3}</span></Link>

                        </li>
                        <li className={`${route.asPath === "/signIN" ? "activeNav" : ""}`}>
                            <Link href={"/signIN"} className='main-nav-item'>
                                <span
                                    className={`${route.asPath === "/signIN" ? "active" : ""}`}

                                >{navOb.nav4}</span></Link>

                        </li>

                        <li className={`${route.asPath === "/signUp" ? "activeNav" : ""}`}>
                            {session.data == null ?
                                <Link href="/signUp" className='main-nav-item'><span
                                    className={`${route.asPath === "/signUp" ? "active" : ""}`}
                                >{navOb.nav5}</span></Link>
                                : (
                                    <div className='main-nav-item'><span style={{ cursor: 'pointer' }}
                                        className={`${route.asPath === "/signUp" ? "active" : ""}`}
                                        onClick={() => {
                                            signOut()
                                        }}
                                    >{navOb.nav6}</span></div>
                                )}


                        </li>
                    </ul>
                </div>
                <div className='second-nav'>
                    <ul className='second-nav-items'>
                        <li style={{
                            height: "50px",
                            width: route.locale == 'en' ?'170px': "200px",
                            backgroundColor: route.asPath === "/profile" ? "#00416B" : "",
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "10px",
                            marginRight:'10px',
                            marginLeft:route.locale== 'ar'&&'56px'

                        }}>
                            <Link href='/profile' className='second-nav-item'><span
                                style={{
                                    fontSize: route.asPath == '/profile' ? "20px" : "24px",
                                    color: route.asPath === "/profile" ? "#fff" : "#00416b",
                                    marginRight: route.asPath == '/profile' ? "4px" : "-2px"


                                }}
                            >{navOb.nav7} </span>
                            </Link>
                        </li>
                        <li style={{
                            marginRight: route.locale == 'en' ? '-20px':'-46px', 
                            background: showLang ? "#00416b" : "#fff",
                            width:route.locale=='ar'? '127.87px':"166px",
                             marginLeft:route.locale =='ar'?'20px':"-8px",
                            height: '50.72px',
                            paddingLeft:showLang&&"0"
                        }}
                            className={`add-adds-menu ${showLang ? "show" : ""}`} >
                            {/* className={`select-lang-menu ${showLang ? "active" : ""}`} */}
                            <span style={{
                                fontSize:route.locale=="en"?"20":"22px",
                                color: showLang ? "#fff" : '#00416B', 
                                marginRight: 'unset',
                                marginLeft: 'unset',
                                margin:"unset"
                            }} className={`lang-title ${showLang ? "active" : ""}`} onClick={() => {
                                setAddMenu(false)
                                setShowLang(!showLang)
                            }
                            }>
                                <img src={`/assets/img/${showLang ? 'Arrow - Left 2.svg' : 'Stroke 1.svg'}`} /> {navOb.nav8}</span>

                            <ul className={`select-lang-items ${!showLang ? 'hidden' : 'showMenu'}`}
                                   >
                                <li><Link href={route.asPath} locale='en'><a style={{ textDecoration: "none", color: "#fff" }}>English</a></Link></li>
                                <li><Link href={route.asPath} locale='ar'><a style={{ textDecoration: "none", color: "#fff" }}>عربي</a></Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className={`add-adds-menu addOfficeAddSerivce ${showAddMenu ? "show" : ""}`}>
                                <div className="" style={{ zIndex: "4", cursor: 'pointer' }}>  <img className='add-img-btn' width={22}
                                    height={22} onClick={() => {
                                        setShowLang(false)
                                        setAddMenu(!showAddMenu)
                                    }} src={icon ? icon : '/assets/img/+.png'} /></div>
                                <Link href="/profile/addAdds" className='add-adds-item'><span style={{
                                    marginLeft: '22px',
                                    marginRight:'19px'
                                }}>
                                    <span className='add-adds-tilte shortcutNav' >{navOb.nav9}
                                    </span>
                                </span>
                                </Link>


                                <ul className={`add-adds-items ${!showAddMenu ? 'hidden' : 'showMenu'}`}>
                                    {/* <li>
                                        <Link href="/profile/addOffice" className='add-adds-item'><span className='shortcutNav'>{navOb.nav11}</span></Link>

                                    </li> */}
                                    <li style={{
                                        marginLeft: '0',
                                        paddingRight: route.locale=='en'?"46px":"18px"
                                    }}>
                                        <Link href="/profile/addService" className='add-adds-item'>
                                            <span className='shortcutNav'>{navOb.nav10}</span>
                                        </Link>

                                    </li>

                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* fallback-nav */}
                <div className="fallback-container">
                    <div className="add-menus-profile">
                        <div className={` ${showAddMenu ? "show" : ""}`}>
                            <span className='menu-profile'  >
                                <img style={{
                                    cursor: "pointer",
                                    widht: '39.87px',
                                    heigth: '39.87px',
                                    zIndex: "4"
                                }} onClick={() => {
                                    setShowLang(false)
                                    setAddMenu(!showAddMenu)
                                    setIconTwo(!iconTwo)
                                    setShowNav(false)
                                }} src={iconTwo ? '/assets/img/fallback-+.svg' : '/assets/img/fallback2.svg'} />
                            </span>



                            <ul className={`add-adds-items ${!showAddMenu ? 'hidden' : 'showMenu'}`} style={{
                                height: "105.6px",
                                width: '144.5px',

                            }}>
                                <li>
                                    <Link href="/profile/addAdds" className='add-adds-item'><div className='shortcutNav'>{navOb.nav9}</div></Link>

                                </li>
                                {/* <li>
                                    <Link href="/profile/addOffice" className='add-adds-item'><span className='shortcutNav'>{navOb.nav11}</span></Link>

                                </li> */}
                                <li>
                                    <Link href="/profile/addService" className='add-adds-item'><div className='shortcutNav'>{navOb.nav10}</div></Link>

                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="fallback-logo">
                        <Link href='/' className='main-nav-item'>
                            <span className='logo'>
                                <img className='logo-img' src={logo ? logo : '/assets/img/logo.svg'} alt='logo' />
                            </span>
                        </Link>
                    </div>
                </div>
                {!showNav ?
                    <img src="/assets/img/arrowUp-nav.svg" alt="" className='arrowUp-nav' onClick={() => {
                        setAddMenu(false)
                        setShowNav(true)
                    }} style={{
                        cursor: "pointer"
                    }} />
                    : <img src="/assets/img/arrowDown-nav.svg" alt="" className='arrowDown-nav' onClick={() => setShowNav(false)} style={{
                        cursor: "pointer",
                        top: movearrow ? '582px' : '529px'
                    }} />

                }

            </div>

            {showNav ?
                <div className="fallBack-dropDownNav">
                    <FallBackNav navOb={navOb} setShowNav={setShowNav} setMvoeArrow={setMvoeArrow} movearrow={movearrow} />
                </div>
                : ""
            }

        </>
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => Nav.handleClickOutside,
};
export default onClickOutside(Nav, clickOutsideConfig);