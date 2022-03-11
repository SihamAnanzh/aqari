import React  , {useState,useEffect} from 'react'
import DropdownTypes from './DropdownTypes';
import axios from 'axios';

// const items = [
//   {
//     id: 1,
//     value: 'محلات',
//     icon:"assets/img/offices.svg"
//   },
//   {
//     id: 2,
//     value: 'اراضي',
//     icon:"assets/img/lands.svg"
//   },
//   {
//     id: 3,
//     value: 'شقق',
//     icon:"assets/img/apartments.svg"
//   },
//   {
//     id: 4,
//     value: 'عمارات',
//     icon:"assets/img/bulding.svg"
//   },{
//     id: 5,
//     value: 'بيوت',
//     icon:"assets/img/houses.svg"

//   },{
//     id: 6,
//     value: 'مزارع',
//     icon:"assets/img/farms.svg"
//   },{
//     id: 7,
//     value: 'شالية',
//     icon:"assets/img/shalleh .svg"
//   }
// ];


const SearchBoxTypes = ({category}) => {
  const [statType, SetStatTypes] =useState([]);
//   const [,setCategory]=useState()
    
// useEffect(()=>{
// axios.get('https://stagingapi.aqarifinder.com/api/category/list',{
//     headers: {
//       "lang":'ar' 
//        },
//   })
//   .then(res=>{
//       res.status.code === 200?
//         setRegions(()=>{res.data.results}):
//           setCategory(res.data.results)
//   })
// },[])


return (
       <>
     <DropdownTypes title='نوع العقار' items={category} />
      </>
)
}

export default SearchBoxTypes