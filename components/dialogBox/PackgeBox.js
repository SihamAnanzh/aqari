import React from 'react'
import Link from 'next/link'
const PackgeBox = () => {
  return (
    <div className='box' style={{
        top:"82%"
    }}>
        <div className="icon-box">
            <img src="/assets/img/packgeBox.svg" alt=""  style={{
                marginTop:'-32px'
            }}/>
        </div>
        <div className="content-box">
            <p>
            تبقى لديك اعلان مميز عدد 3 هل ترغب بالاستمرار ؟ </p>
        </div>
        <div className="box-btns">
           
              <div className="box-btn signUp-btn">
              {/* <Link href='/'>استمرار</Link> */}
              استمرار
              </div>
              <div className="box-btn">
            <div  onClick={()=>console.log(res)}>الغاء</div>
            </div>
        </div>
    </div>
  )
}

export default PackgeBox