import React from 'react'

const Banner = ({content}) => {


  return (
    <div className='banner'>
         {
           content ? <img src={content}/>:
           <h1 className='banner-title'>ابحث عن عقارك وانت مكانك</h1>

         }

    </div>
  )
}

export default Banner