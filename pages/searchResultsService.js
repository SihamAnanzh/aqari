import React,{useCallback, useContext} from 'react'
import { FilterContext } from '../stores/filter'
import ServiveResults from '../components/searchResult/ServiveResults'
import NoResults from '../components/searchResult/NoResults'
const SearchResultsService = () => {
const filterCtx=useContext(FilterContext)
    return (
        <>
             {
               
                filterCtx.serviceResults.length== ""?<NoResults/>:<ServiveResults/>
               
             }
      
             
         
           </>
      )
    
}

export default SearchResultsService