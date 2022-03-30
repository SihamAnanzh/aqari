import React, { useState,useEffect,useContext } from 'react'
import onClickOutside from 'react-onclickoutside';
import axios from 'axios';
import { FilterContext } from '../../stores/filter';


const DropdownNames = ({items=[], title, setSelectItem,showSearchSelling,setRegionName}) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const [showListNames, setShowListNames]=useState(true)
    const [selectItem,setSelectItems]=useState([])
    const [regionsId,setRegionsId]=useState([])
    const filterCtx=useContext(FilterContext)

   
    // const toggle = () => setOpen(!open);
    DropdownNames.handleClickOutside = () => {
        setOpen(false);
        setShowListNames(true)
  
    }

 

// useEffect(() => { 
// selectItem?
// selectItem.map(item=>{
//     AddActiveClass(item.id)
// }):""
// console.log(items);
// }, [showListNames]); 


 

useEffect(() => { 

filterCtx.setRegionsId(regionsId)
console.log(regionsId);
    }, [regionsId]); 
    
    

    
    
const AddActiveClass=(id)=>{
let item=document.getElementById(id)
item.classList.add('selected')
console.log(item);


}
          
const removeAcitveCllass=(id)=>{
let item=document.getElementById(id)
item.classList.remove('selected')
console.log(item);


}
  
  
    return (
     <div className='dropdwon-menu' style={{
         zIndex:"1000"
     }}>
        <div className='serach-content' onClick={(e)=>{
         setShowListNames(!showListNames)
         setOpen(!open)
        //  e.target.nextSibling.classList.toggle('hidden')
          }}>
        <span className='serach-icon' >
                <img src='assets/img/research.svg' style={{
                    margin:'10px '
                }}/>              
            </span>
            <span className='bar-icon' style={{
                margin:'5px'
            }}>
                <img src='assets/img/bar.svg' style={{
                    height:"28px"
                }}/>              
            </span>
        <p className='placeholder cityName' style={{
         
            fontSize:`${selection.length>0 ?"16px":""}`,
            color:`${selection.length>0 ?"#EDAA43":""}`
}}>
      
     
          {
           

            selection.length >0 ?(
               selection.length <3?
                selection.map((select, index)=>(
                    (index?' ,':"")+select
                )):selection[0]+","+selection[1]+","+selection[2]+"..."            
            ):title
          }
         </p> 
         <img src='/assets/img/Stroke 1.svg' className='arrow-drop-name'/>
        </div>
        {
               open ? 
                <ul className={`list-items dropItem ${showListNames?'hidden':""}`}>
  
               <h3 >كل محافظات الكويت</h3>
                {items.map((item)=>(
                    <li className='list-item'  key={item.id}  id={item.id} onClick={(e)=>
                       
                        
                        {

                            // let indexRegion=regionsId.findIndex((el)=>el===item.id)
                            // if(indexRegion == -1){
                            //     let newArray=[...regionsId]
                            //     newArray.splice(indexRegion,1)

    
                            // }else{
                            //     let newArray=[...regionsId]
                            //     newArray.splice(indexRegion,1)
                            //        console.log(regionsId);
                            // }                               

                           
              
                             let selectInfo= {
                               value:item.title,
                               id:item.id
                           }
                       
                           let index=selection.findIndex((el)=>el===item.title)
                           if(index == -1){
                            setRegionsId(pre=>[...pre,item.id])
                               setSelection(pre=>[...pre,item.title])
                               setSelectItems(pre=>[...pre,selectInfo])
                                AddActiveClass(e.target.id)
                            //  let regionId=regionsId.findIndex((el)=>el===item.id)
                            //   regionId == -1 && setRegionsId(pre=>[...pre,item.id])
                            //     console.log(index);

                           }else{
                               let newArray=[...selection]
                               newArray.splice(index,1)
                                setSelection(newArray)
                                let newRegions=[...regionsId]
                                newRegions.splice(index,1)
                                setRegionsId(newRegions)
                                removeAcitveCllass(e.target.id)
                                // setRegionsId(pre=>[...pre,selectInfo.id])


                                
                       
                           }
                           console.log(regionsId);
                             
                       
                          
                       
                 
                        
                       }
                    }>{item.title}</li>
                ))}
           </ul>:""
        }
     
   </div>
        
   

    );
  }
  
  const clickOutsideConfig = {
    handleClickOutside: () => DropdownNames.handleClickOutside,
  };
  
export default onClickOutside(DropdownNames,clickOutsideConfig);
