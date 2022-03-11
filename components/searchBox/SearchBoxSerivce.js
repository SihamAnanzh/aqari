import React , {useState,useEffect} from 'react'
import DropdownServcies from './DropdownServcies';


  
const SearchBoxSerivce = ({services}) => {
 
    return (
           <>
         <DropdownServcies title='نوع الخدمة' items={services} />
          </>
    )
}

export default SearchBoxSerivce