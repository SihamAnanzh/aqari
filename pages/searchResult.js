import React ,{useContext, useEffect, useState} from 'react'
import SearchResultComponents  from '../components/searchResult/SearchResult'
import NoResults from '../components/searchResult/NoResults'
import { FilterContext } from '../stores/filter';

const SearchResult = () => {
  const [addsFilter,setAddsfilter]=useState()
  const [serviceFilter,setServicefilter]=useState()
  const [addsTowFilter,setAddsTwofilter]=useState()
  const [servicesData,setServicse]=useState([])
  const filterCtx=useContext(FilterContext)
  
  const [haveResults, setHaveResults] = useState(true);



  return (
    <>
         {
           (
       filterCtx.addsResults.premium_ads.length == 0 &&filterCtx.addsResults.ads.length == 0?<NoResults/>:<SearchResultComponents />
           )
         }
  
         
     
       </>
  )
}

export default SearchResult