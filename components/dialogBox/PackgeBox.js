import React from 'react'
import Link from 'next/link'
const PackgeBox = ({setShowDialogiBox,showDialogBoxn,count}) => {
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
            <p>{`تبقى لديك اعلان مميز عدد ${count} هل ترغب بالاستمرار ؟ 
`}
            </p>
        </div>
        <div className="box-btns">
           
              <div className="box-btn signUp-btn"  onClick={()=>setShowDialogiBox(false)}>
              {/* <Link href='/'>استمرار</Link> */}
              استمرار
              </div>
              <div className="box-btn">
            <div  onClick={()=>setShowDialogiBox(true)}>الغاء</div>
            </div>
        </div>
    </div>
  )
}

export default PackgeBox