import React  , {useState,useEffect} from 'react'
import DropdownTypes from './DropdownTypes';
import axios from 'axios';


const SearchBoxTypes = ({category, searchOb}) => {
  const [statType, SetStatTypes] =useState([]);


return (
       <>
     
     <DropdownTypes subTitle={searchOb.dropSubTitle} title={searchOb.sh10} items={category} />
      </>
)
}

export default SearchBoxTypes