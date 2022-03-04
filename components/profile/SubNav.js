import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const SubNav = () => {
    const route = useRouter()

  return (
    <div className='subNav-contanier'>
         <ul className="subNav-items profile-sections">
             <li className="subNav-item active ">
                 <Link href='/profile'><a className={`sub-link ${route.asPath == '/profile'?'active':""}`}>شخصي</a></Link>
             </li>
             <li className="subNav-item">
                 <Link href='/profile/myAdds'><a className={`sub-link ${route.asPath == '/profile/myAdds' || route.asPath =='/profile/editEstate'?'active':""}`}>إعلاناتي</a></Link>
             </li>
             <li className="subNav-item">
                 <Link href='/profile/mySerivces'><a className={`sub-link ${route.asPath == '/profile/mySerivces'?'active':""}`}>خدماتي</a></Link>
             </li>
             <li className="subNav-item">
                 <Link href='/profile/myFavorite'><a className={`sub-link ${route.asPath == '/profile/myFavorite'?'active':""}`}>المفضلة</a></Link>
             </li>
             <li className="subNav-item">
                 <Link href='/profile/addAdds'><a className={`sub-link ${route.asPath == '/profile/addAdds' ?'active':""}`}>اضف إعلان</a></Link>
             </li>
             <li className="subNav-item">
                 <Link href='/profile/addOffice'><a className={`sub-link ${route.asPath == '/profile/addOffice'?'active':""}`}>اضف مكتب</a></Link>
             </li>
             <li className="subNav-item">
                 <Link href='/profile/addService'><a className={`sub-link ${route.asPath == '/profile/addService'?'active':""}`}>اضف خدمة</a></Link>
             </li>
         </ul>
        
    </div>
  )
}

export default SubNav