import React , {useState} from 'react'
import DropdownServcies from './DropdownServcies';


const items = [
    {
      id: 1,
      value: 'محركات',
    },
    {
      id: 2,
      value: 'حرف',
    },
    {
      id: 3,
      value: 'تركيب ستالايت',
    },
    {
      id: 4,
      value: 'مكافحة حشرات',
    },{
      id: 5,
      value: 'نقل عفش',
    },{
      id: 6,
      value: 'اصباغ',
    },{
      id: 7,
      value: 'تنظيف',
    }
  ];
  
const SearchBoxSerivce = ({servicesNames ,setSelectItem,showListNames,setShowListNames}) => {
    const [services, SetSerivces] =useState([]);

    return (
           <>
         <DropdownServcies title='نوع الخدمة' items={items} setSelectItem={setSelectItem} showListNames={showListNames} setShowListNames={setShowListNames}/>
          </>
    )
}

export default SearchBoxSerivce