import React from 'react'
import SimpleMap from '../map/MapAdds'
const AddAdds = () => {
  return (
    <div>  
      <div className='profile-tab'>
    <div className="signin-contanier addAdds-tab-container ">
      <div className="addAdds-heading">
        <h3>إضافة إعلان</h3>
      </div>
    <div className="inputs-group addAdds-group">
    <div className="sign-input  addAdds-phone ">
           <h3>رقم الهاتف</h3>
           <input type="number" className="sign-mail" placeholder='رقم الهاتف' tabIndex={3} autoFocus />
       </div>
       <div className="sign-input profile-mail mail">
           <h3>الفئة</h3>
           {/* drop down coustme menu */}
           <input type="text" className="sign-mail" placeholder='الفئة' tabIndex={2}  />
       </div>
       <div className="sign-input  addAdds-type">
           <h3>نوع العقار</h3>
           <input type="text" className="sign-mail" placeholder='نوع العقار' tabIndex={3} />
       </div>
       <div className="sign-input  addAdds-region">
           <h3>المنطقة</h3>
           <input type="text" className="sign-mail" placeholder='المنطقة' tabIndex={3} />
       </div>
       <div className="sign-input  addAdds-space">
           <h3>المساحة</h3>
           <input type="text" className="sign-mail" placeholder='المساحة' tabIndex={3} />
       </div>
       <div className="sign-input  addAdds-price">
           <h3>السعر</h3>
           <input type="text" className="sign-mail" placeholder='السعر' tabIndex={3} />
       </div>
       <div className="sign-input  addAdds-interface">
           <h3>الواجهة</h3>
           <input type="text" className="sign-mail" placeholder='الواجهة' tabIndex={3} />
       </div>
       <div className="sign-input  addAdds-auto-num">
           <h3>الرقم الآلي</h3>
           <input type="text" className="sign-mail" placeholder='الرقم الآلي' tabIndex={3} />
       </div>
       <div className="sign-input  addAdds-disc">
           <h3>وصف العقار</h3>
           <textarea className="sign-mail" placeholder='وصف العقار' tabIndex={3}  />
       </div>
       <div className="sign-input  addAdds-auto-num">
           <h3>تحديد المواقع</h3>
           <div className="map-adds">
           <SimpleMap/>
           </div>
       </div>
       <div className="checksbox">
         <div className="premium-add">
           <img src="assets/img" alt="" />
         </div>
         <div className="post-add"></div>
         <div className="conditions"></div>
       </div>
    </div>

    <div className="sign-btn">
    اضافة
    </div>

   </div>
    </div></div>
  )
}

export default AddAdds