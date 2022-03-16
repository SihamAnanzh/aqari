import React  , {useState,useEffect} from 'react'
import DropdownTypes from './DropdownTypes';
import axios from 'axios';


const SearchBoxTypes = ({category}) => {
  const [statType, SetStatTypes] =useState([]);


return (
       <>
     <DropdownTypes title='نوع العقار' items={category} />
      </>
)
}

export default SearchBoxTypes