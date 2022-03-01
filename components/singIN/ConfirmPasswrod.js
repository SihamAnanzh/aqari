import React from 'react'

const ConfirmPasswrod = () => {
  return (
    <div className="signin-contanier">
    <div className="sign">
        <h2 style={{
            fontFamily:'otfPlain',
            marginRight:"-14px"
        }
        }>إعادة تعيين كلمة السر</h2>
    </div>
    <div className="inputs-group">
       <div className="sign-input mail">
           <h3 style={{
               paddingBottom:"10px"
           }}>كلمة السر الجديدة</h3>
           <input type="text" className="sign-mail" placeholder='كلمة السر الجديدة'/>
       </div>
       <div className="sign-btn">
       استمرار
        </div>
    </div>
    </div>
)
}

export default ConfirmPasswrod