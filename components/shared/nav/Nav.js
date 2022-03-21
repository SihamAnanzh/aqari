import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import onClickOutside from 'react-onclickoutside';
import FallBackNav from './FallBackNav'
import { AuthContext } from '../../../stores/auth-context'
import axios from 'axios';
const Nav = ({ logo, icon }) => {
    const [showLang, setShowLang] = useState(false)
    const [showAddMenu, setAddMenu] = useState(false)
    const [showNav, setShowNav] = useState(false)
    const [login, setLogin] = useState(false)
    const [movearrow, setMvoeArrow] = useState(false)
    const authCtx = useContext(AuthContext)

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
                                </a></Link>

                        </li>
                        <li className={`${route.asPath === "/" ? "activeNav" : ""}`}>
                            {route.asPath === "/" ? (<span className="main-nav-item active" style={{color:"#fff"}}>الرئيسية</span>) :
                                <Link href="/" className='main-nav-item'><a
                                    className={`${route.asPath === "/" ? "active" : ""}`}
                                >الرئيسية</a></Link>
                            }

                        </li>
                        <li className={`${route.asPath === "/offices" || route.asPath === 'offices/singleOffec' ? "activeNav" : ""}`}>
                            <Link href="/offices" className='main-nav-item'><a
                                className={`${route.asPath === "/offices" || route.asPath === 'offices/singleOffec' ? "active" : ""}`}
                                disable={`${route.asPath === "/offices" || route.asPath === 'offices/singleOffec' ? true : false}`}
                            >المكاتب</a></Link>

                        </li>
                        <li className={`${route.asPath === "/packges" ? "activeNav" : ""}`}>
                            <Link href="/packges" className='main-nav-item'><a
                                className={`${route.asPath === "/packges" ? "active" : ""}`}
                            >الباقات</a></Link>

                        </li>
                        <li className={`${route.asPath === "/signIN" ? "activeNav" : ""}`} onClick={() => setLogin(true)} style={{ display: authCtx.isLoggedIn && 'none' }}>
                            <Link href={`${authCtx.isLoggedIn ? '/profile' : "/signIN"}`} className='main-nav-item'><a
                                className={`${route.asPath === "/signIN" ? "active" : ""}`}

                            >دخول</a></Link>

                        </li>
                        <li className={`${route.asPath === "/signUp" ? "activeNav" : ""}`}>
                            {!authCtx.isLoggedIn ?
                                <Link href="/signUp" className='main-nav-item'><a
                                    className={`${route.asPath === "/signUp" ? "active" : ""}`}
                                >تسجيل</a></Link>
                                : (
                                    <div className='main-nav-item'><a style={{ cursor: 'pointer' }}
                                        className={`${route.asPath === "/signUp" ? "active" : ""}`}
                                        onClick={() => {


                                            axios.post('https://stagingapi.aqarifinder.com/api/user/logout', {
                                                headers: { 'Authorization': authCtx.token }
                                            }).then(res => { authCtx.logout() })

                                        }}
                                    >تسجيل خروج</a></div>
                                )}


                        </li>
                    </ul>
                </div>
                <div className='second-nav'>
                    <ul className='second-nav-items'>
                        <li style={{
                            height: "50px",
                            width: "170px",
                            backgroundColor: route.asPath === "/profile" ? "#00416B" : "",
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "10px",

                        }}>
                            <Link href='/profile' className='second-nav-item'><a
                                style={{
                                    fontSize: route.asPath == '/profile' ? "20px" : "21px",
                                    color: route.asPath === "/profile" ? "#fff" : "#00416b",
                                    marginRight: route.asPath == '/profile' ? "-26px" : "-27px"


                                }}
                            >الملف الشخصي
                            </a>
                            </Link>
                        </li>
                        <div className={`select-lang-menu ${showLang ? "active" : ""}`}>
                            <span className={`lang-title ${showLang ? "active" : ""}`} onClick={() => {
                                setAddMenu(false)
                                setShowLang(!showLang)
                            }
                            }>
                                <img src={`/assets/img/${showLang ? 'Arrow - Left 2.svg' : 'Stroke 1.svg'}`} /> اللغة</span>

                            <ul className={`select-lang-items ${!showLang ? 'hidden' : 'showMenu'}`}>
                                <li className='arabic-lang'>عربي</li>
                                <li className='english-lang'>English</li>
                            </ul>
                        </div>
                        <li>
                            <div className={`add-adds-menu ${showAddMenu ? "show" : ""}`}>

                                <Link href="/profile/addAdds" className='add-adds-item'><a>
                                    <span className='add-adds-tilte' >أضف إعلان
                                        <img onClick={() => {
                                            setShowLang(false)
                                            setAddMenu(!showAddMenu)
                                        }} src={icon ? icon : '/assets/img/+.png'} /></span>
                                </a>
                                </Link>


                                <ul className={`add-adds-items ${!showAddMenu ? 'hidden' : 'showMenu'}`}>
                                    <li>
                                        <Link href="/profile/addOffice" className='add-adds-item'><a>أضف مكتب</a></Link>

                                    </li>
                                    <li>
                                        <Link href="/profile/addService" className='add-adds-item'><a>اضف خدمة</a></Link>

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
                                height: "160.6px",
                                width: '158.5px',

                            }}>
                                <li>
                                    <Link href="/profile/addAdds" className='add-adds-item'><a>أضف اعلان</a></Link>

                                </li>
                                <li>
                                    <Link href="/profile/addOffice" className='add-adds-item'><a>أضف مكتب</a></Link>

                                </li>
                                <li>
                                    <Link href="/profile/addService" className='add-adds-item'><a>اضف خدمة</a></Link>

                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="fallback-logo">
                        <Link href='/' className='main-nav-item'>
                            <a className='logo'>
                                <img className='logo-img' src={logo ? logo : '/assets/img/logo.svg'} alt='logo' />
                            </a>
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
                    <FallBackNav setShowNav={setShowNav} setMvoeArrow={setMvoeArrow} movearrow={movearrow} />
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