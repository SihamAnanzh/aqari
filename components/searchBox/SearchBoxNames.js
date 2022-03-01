import React , {useState} from 'react'
import DropdownNames from './DropdownNames';



const items = [
  {
    id: 1,
    value: 'حولي',
  },
  {
    id: 2,
    value: 'السلام',
  },
  {
    id: 3,
    value: 'سلوى',
  },
  {
    id: 4,
    value: 'بيان',
  },{
    id: 5,
    value: 'الشهداء',
  },{
    id: 6,
    value: 'السالمية',
  },{
    id: 7,
    value: 'حطين',
  }
];

const SearchBoxNames = ({setSelectItem,showListNames,setShowListNames, setRegionName}) => {

    const [statType, SetStatTypes] =useState([]);

  return (
         <>
       <DropdownNames setRegionName={setRegionName}  title='اسم المنطقة' items={items} setSelectItem={setSelectItem} showListNames={showListNames} setShowListNames={setShowListNames}/>
        </>
  )
  
}


export default SearchBoxNames