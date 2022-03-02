import React  ,{useState,useEffect}from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router';
import onClickOutside from 'react-onclickoutside';

const Nav = ({logo,icon}) => {
    const [showLang,setShowLang]=useState(false)
    const [showAddMenu,setAddMenu]=useState(false)
    const [activeNav,setAcitvNav]=useState(false)
    const [activPage,setAcitvpage]=useState(false)
  const route =useRouter()
    Nav.handleClickOutside = () => {
        setAddMenu(false)
        setShowLang(false)
    }

 


  return (
    <div className='navbar'>
        <div className='main-nav'>
        <ul className='main-nav-items'>
            <li>
            <Link href='/' classNamem='main-nav-item'>
                <a className='logo'>
                    <img className='logo-img' src={logo?logo:'/assets/img/logo.svg'}  alt='logo'/>
                </a></Link>

            </li>
            <li  className={`${route.asPath === "/" ?"activeNav":""}`}>
            <Link href="/" classNamem='main-nav-item'><a
             className={`${route.asPath === "/" ?"active":""}`}
            >الرئيسية</a></Link>

            </li>
            <li  className={`${route.asPath === "/offices" ||route.asPath ==='offices/singleOffec' ?"activeNav":""}`}>
            <Link href="/offices" classNamem='main-nav-item'><a
             className={`${route.asPath === "/offices"  || route.asPath ==='offices/singleOffec' ?"active":""}`}
            >المكاتب</a></Link>

            </li>
            <li  className={`${route.asPath === "/packges" ?"activeNav":""}`}>
            <Link href="/packges" classNamem='main-nav-item'><a 
              className={`${route.asPath === "/packges" ?"active":""}`}
            >الباقات</a></Link>

            </li>
            <li  className={`${route.asPath === "/signIN" ?"activeNav":""}`}>
            <Link href="/signIN" classNamem='main-nav-item'><a 
                         className={`${route.asPath === "/signIN" ?"active":""}`}

            >دخول</a></Link>

            </li>
            <li  className={`${route.asPath === "/signUp" ?"activeNav":""}`}>
            <Link href="/signUp" classNamem='main-nav-item'><a 
                         className={`${route.asPath === "/signUp" ?"active":""}`}
                         >تسجيل</a></Link>

            </li>
        </ul>
        </div>
        <div className='second-nav'>
            <ul className='second-nav-items'>
                <li>
                <Link href='/profile' className='second-nav-item'><a>الملف الشخصي
                </a>
                    </Link>
                </li>
                <div className={`select-lang-menu ${showLang?"active":""}`}>
                    <span className={`lang-title ${showLang?"active":""}`} onClick={()=>{
                        setAddMenu(false)
                        setShowLang(!showLang)}
                        }>
                         <img src={`/assets/img/${showLang?'Arrow - Left 2.svg':'Stroke 1.svg'}`}/> اللغة</span>
                         
                      <ul className={`select-lang-items ${!showLang?'hidden':'showMenu'}`}>
                          <li className='arabic-lang'>عربي</li>
                            <li className='english-lang'>English</li>
                      </ul>
                </div>
                <li>
                    <div className={`add-adds-menu ${showAddMenu?"show":""}`}>
                        <span className='add-adds-tilte' onClick={()=>{
                            setShowLang(false)
                            setAddMenu(!showAddMenu)}
                            }>اضف إعلان  <img src={icon?icon:'/assets/img/+.png'} /></span>
                        <ul className={`add-adds-items ${!showAddMenu?'hidden':'showMenu'}`}>
                            <li>
                            <Link href="/" className='add-adds-item'><a>أضف مكتب</a></Link>

                            </li>
                            <li>
                            <Link href="/" className='add-adds-item'><a>اضف خدمة</a></Link>

                            </li>

                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
  )
}
const clickOutsideConfig = {
    handleClickOutside: () => Nav.handleClickOutside,
  };
export default onClickOutside(Nav,clickOutsideConfig);