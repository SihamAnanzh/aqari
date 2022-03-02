import React from 'react'

const MyPorfile = () => {
  return (
    <div className='profile-tab'>
    <div className="signin-contanier profile-tab-container  ">
    <div className="inputs-group profile-group">
    <div className="sign-input profile-name">
            <h3>الاسم</h3>
               <input type="text" className="sign-name" placeholder='الاسم' tabIndex={1} autoFocus />
           </div>
       <div className="sign-input profile-mail mail">
           <h3>البريد الإلكتروني</h3>
           <input type="text" className="sign-mail" placeholder='البريد الإلكتروني' tabIndex={2}  />
       </div>
       <div className="sign-input  profile-phone phone-singup">
           <h3>رقم الهاتف</h3>
           <input type="text" className="sign-mail" placeholder='رقم الهاتف' tabIndex={3} />
       </div>


    </div>

    <div className="sign-btn">
    حفظ
    </div>

   </div>
    </div>
  )
}

export default MyPorfile