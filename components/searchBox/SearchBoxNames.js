import React , {useState,useEffect} from 'react'
import DropdownNames from './DropdownNames';



const SearchBoxNames = ({regions,searchOb}) => {


  return (
         <>
       <DropdownNames  title={searchOb.sh9} items={regions}/>
        </>
  )
  
}


export default SearchBoxNames