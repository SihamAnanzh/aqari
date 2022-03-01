import React  , {useState} from 'react'
import DropdownTypes from './DropdownTypes';


const items = [
  {
    id: 1,
    value: 'محلات',
    icon:"assets/img/offices.svg"
  },
  {
    id: 2,
    value: 'اراضي',
    icon:"assets/img/lands.svg"
  },
  {
    id: 3,
    value: 'شقق',
    icon:"assets/img/apartments.svg"
  },
  {
    id: 4,
    value: 'عمارات',
    icon:"assets/img/bulding.svg"
  },{
    id: 5,
    value: 'بيوت',
    icon:"assets/img/houses.svg"

  },{
    id: 6,
    value: 'مزارع',
    icon:"assets/img/farms.svg"
  },{
    id: 7,
    value: 'شالية',
    icon:"assets/img/shalleh .svg"
  }
];


const SearchBoxTypes = ({esataTypes ,setSelectItem,showListNames,setShowListNames}) => {
  const [statType, SetStatTypes] =useState([]);

return (
       <>
     <DropdownTypes title='نوع العقار' items={items} setSelectItem={setSelectItem} showListNames={showListNames} setShowListNames={setShowListNames}/>
      </>
)
}

export default SearchBoxTypes