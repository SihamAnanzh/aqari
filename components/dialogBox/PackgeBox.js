import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const PackgeBox = ({ setShowDialogiBox, showDialogBoxn, count }) => {
    const route=useRouter()
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
              <p>{route.locale == 'ar' ? `تبقى لديك اعلان مميز عدد ${count} هل ترغب بالاستمرار ؟` : 
                  `You still have ${count} premium ads ? Do you want to continue?`
                }
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