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


  useEffect(()=>{
  console.log(filterCtx.addsResults.premium_ads.length);
  },[filterCtx.addsResults])

console.log(filterCtx.serviceResults);
console.log(filterCtx.addsResults && filterCtx.addsResults.length);

  return (
    <>
       {
  
         
     (filterCtx.addsResults.ads.length == 0 && filterCtx.addsResults.premium_ads.length == 0) ?
      filterCtx.serviceResults.length == 0 ?
       <NoResults/>
       :!filterCtx.serviceResults.length == 0
        ?<SearchResultComponents showAds='false' />
        :<SearchResultComponents showAds='true' />:<SearchResultComponents showAds='true' />

       }
       </>
  )
}

export default SearchResult