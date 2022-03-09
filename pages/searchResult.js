import React ,{useState} from 'react'
import SearchResultComponents  from '../components/searchResult/SearchResult'
import NoResults from '../components/searchResult/NoResults'

const SearchResult = () => {
  const [haveResults, setHaveResults] = useState(false);
  return (
    <>
       {
         
         haveResults ?

         <SearchResultComponents/>:
         <NoResults/>

       }
       </>
  )
}

export default SearchResult