import React from 'react'

const Banner = ({content,bn}) => {


  return (
    <div className='banner'>
         {
           content ? <img src={content}/>:
           <h1 className='banner-title'>{bn}</h1>

         }

    </div>
  )
}

export default Banner