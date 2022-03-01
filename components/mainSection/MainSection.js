import React ,{useState} from 'react'
import SearchBoxNames from '../searchBox/SearchBoxNames'
import onClickOutside from 'react-onclickoutside';
import SearchBoxTypes from '../searchBox/SearchBoxTypes';
import SearchBoxSerivce from '../searchBox/SearchBoxSerivce';
import Link from 'next/link';

const MainSection = () => {
  const [showSearchSelling, setShowSearchSelling]= useState(false)
  const [showSearchRent, setShowSearchRent]= useState(false)
  const [showSearchServics, setShowSearchServics]= useState(false)
  const [showBox,setShowBox]= useState(false)
  const [regionName, setRegionName]=useState([])
  const [statType, setStatType]=useState([])
  const [selectItems,setSelectItem]=useState([])
  const [showListNames ,setShowListNames]=useState(false)
  const [showListTypes ,setShowListTypes]=useState(false)
  
  MainSection.handleClickOutside = () => {
    setShowSearchRent(false)
    setShowSearchServics(false)
    setShowSearchSelling(false)
    setShowBox(false)
  }



    
  console.log(regionName);
  return (
    <div className='actions-contaier'>
        <div className={`actions ${showBox ?'showBox':''}`} tabIndex={1} >
        <div className='selling ' onClick={()=>{
          setShowSearchRent(false)
          setShowSearchServics(false)
          showSearchSelling?setShowBox(false):setShowBox(true)
          setShowSearchSelling(!showSearchSelling)}}>
            <span className={`action ${showSearchSelling ?'acitveAction':''}`}>بيع</span>
        </div>
        <div className='rent' onClick={()=>{
             setShowSearchSelling(false)
             setShowSearchServics(false)
             showSearchRent?setShowBox(false):setShowBox(true)

          setShowSearchRent(!showSearchRent)}} tabIndex={2} >
        <span className={`action ${showSearchRent ?'acitveAction':''}`}>إيجار</span>
        </div>
        <div className='service' onClick={()=>{
           setShowSearchSelling(false)
           setShowSearchRent(false)
    
           showSearchServics?setShowBox(false):setShowBox(true)
          setShowSearchServics(!showSearchServics)}}>
        <span className={`action ${showSearchServics ?'acitveAction':''}`}>خدمات</span>
        </div>
        <div>
        {(showBox) && !showSearchServics ?
           <div className='serarch'>
            <div className='serachContainer first'>
            <SearchBoxNames setRegionName={setRegionName} setSelectItem={setSelectItem} showListNames={showListNames} setShowListNames={setShowListNames} />
            </div>
            <div className='serachContainer second'>
            <SearchBoxTypes setSelectItem ={setSelectItem} showListNames={showListNames} setShowListNames={setShowListNames}/>
            </div>
            <Link className='searchLink' href='/searchResult'>
             <div className=' serachContainer btnSearch' >
               <button style={{
               cursor:"pointer"
             }}>
               ابحث الآن
               </button>

               </div>
               </Link>           </div>: 
             showSearchServics && showBox &&<div className='serarch'>
             <div className='serachContainer first'>
             <SearchBoxNames setSelectItem={setSelectItem} showListNames={showListNames} setShowListNames={setShowListNames}/>
             </div>
             <div className='serachContainer second'>
             <SearchBoxSerivce setSelectItem ={setSelectItem} showListNames={showListNames} setShowListNames={setShowListNames}/>
             </div>
             <Link className='searchLink' href='/searchResult'>
             <div className=' serachContainer btnSearch'  >
               <button style={{
               cursor:"pointer"
             }}>
               ابحث الآن
               </button>

               </div>
               </Link>
            </div>
           
      
           
           
          }
        </div>
        </div>
        
  
    </div>
  )
}
const clickOutsideConfig = {
  handleClickOutside: () => MainSection.handleClickOutside,
};

export default onClickOutside(MainSection,clickOutsideConfig);