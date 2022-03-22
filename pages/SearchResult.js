import React, { useContext } from 'react'
import SearchResultComponents  from '../components/searchResult/SearchResult'
import NoResults from '../components/searchResult/NoResults'
import {FilterContext} from '../stores/filter'



const SearchResult = (props) => {
   const filterCtx=useContext(FilterContext)

  return (
    <>
         {              
         filterCtx.addsResults.premium_ads&&filterCtx.addsResults.premium_ads.length == 0 &&filterCtx.addsResults.ads &&filterCtx.addsResults.ads.length == 0?<NoResults/>:<SearchResultComponents /> 
    }
    </>
  )
}

export default SearchResult