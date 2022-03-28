import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const SubNav = ({proOb}) => {
    const route = useRouter()

  return (
    <div className='subNav-contanier'>
         <ul className="subNav-items profile-sections">
             <li className="subNav-item active ">
                 <Link href='/profile'><a className={`sub-link ${route.asPath == '/profile'?'active':""}`}>{proOb.pro2}</a></Link>
             </li>
             <li className="subNav-item">
                 <Link href='/profile/myAdds'><a className={`sub-link ${route.asPath == '/profile/myAdds' || route.asPath =='/profile/editEstate'?'active':""}`}>{proOb.pro3}</a></Link>
             </li>
             <li className="subNav-item">
                 <Link href='/profile/mySerivces'><a className={`sub-link ${route.asPath == '/profile/mySerivces'?'active':""}`}>{proOb.pro4}</a></Link>
             </li>
             <li className="subNav-item">
                 <Link href='/profile/myFavorite'><a className={`sub-link ${route.asPath == '/profile/myFavorite'?'active':""}`}>{proOb.pro5}</a></Link>
             </li>
             <li className="subNav-item">
                 <Link href='/profile/addAdds'><a className={`sub-link ${route.asPath == '/profile/addAdds' ?'active':""}`}>{proOb.pro6}</a></Link>
             </li>
             {/* <li className="subNav-item">
                 <Link href='/profile/addOffice'><a className={`sub-link ${route.asPath == '/profile/addOffice'?'active':""}`}>{proOb.pro7}</a></Link>
             </li> */}
             <li className="subNav-item">
                 <Link href='/profile/addService'><a className={`sub-link ${route.asPath == '/profile/addService'?'active':""}`}>{proOb.pro8}</a></Link>
             </li>
         </ul>
        
    </div>
  )
}

export default SubNav