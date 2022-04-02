import React , {useState,useEffect} from 'react'
import DropdownNames from './DropdownNames';



const SearchBoxNames = ({regions,searchOb}) => {

console.log(searchOb);
  return (
         <>
       <DropdownNames dropTitle={searchOb.droptitle}  title={searchOb.sh8} items={regions}/>
        </>
  )
  
}


export default SearchBoxNames