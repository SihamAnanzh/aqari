import React , {useState,useEffect} from 'react'
import DropdownNames from './DropdownNames';



const SearchBoxNames = ({regions}) => {


  return (
         <>
       <DropdownNames  title='اسم المنطقة' items={regions}/>
        </>
  )
  
}


export default SearchBoxNames