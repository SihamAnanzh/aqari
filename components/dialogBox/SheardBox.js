import React from 'react'

const SheardBox = (props) => {
  return (
    <div className='box'>
    <div className="icon-box">
        <img src="/assets/img/dialog-icon.svg" alt=""  style={{
            marginTop:'-32px'
        }}/>
    </div>
    <div className="content-box">
        <p>{props.message}
    </p>
    </div>
    <div className="box-btns">

          <div className="box-btn">
        <div onClick={props.handleClick}>اغلاق</div>
        </div>
    </div>
</div>
  )
}

export default SheardBox