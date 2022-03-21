import React, { useContext } from 'react'
import SearchResultComponents  from '../components/searchResult/SearchResult'
import NoResults from '../components/searchResult/NoResults'
import {FilterContext} from '../stores/filter'

// const SearchResult = (props) => {
  



//   return (
//     <>
//          {
           
//        filterCtx.addsResults.premium_ads.length == 0 &&filterCtx.addsResults.ads.length == 0?<NoResults/>:<SearchResultComponents />
           
//          }
     
//        </>
//   )
// }

// export default SearchResult


const SearchResults = (props) => {
   const filterCtx=useContext(FilterContext)

  return (
    <SearchResultComponents />
    // <>
    //      {              
    //      filterCtx.addsResults.premium_ads.length&&filterCtx.addsResults.premium_ads.length == 0 &&filterCtx.addsResults.ads.length &&filterCtx.addsResults.ads.length == 0?<NoResults/>:<SearchResultComponents /> 
    // }
    // </>
  )
}

export default SearchResults