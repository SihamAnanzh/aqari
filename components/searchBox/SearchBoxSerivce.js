import React , {useState,useEffect} from 'react'
import DropdownServcies from './DropdownServcies';


  
const SearchBoxSerivce = ({services, searchOb}) => {
 
    return (
           <>
         <DropdownServcies title={searchOb.sh9} items={services} />
          </>
    )
}

export default SearchBoxSerivce