import React, { useState,useEffect } from 'react'
import onClickOutside from 'react-onclickoutside';

const DropdownNames = ({items=[], title, setSelectItem,showSearchSelling,setRegionName}) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const [showListNames, setShowListNames]=useState(true)
    const [selectItem,setSelectItems]=useState([])
    // const toggle = () => setOpen(!open);
    DropdownNames.handleClickOutside = () => {
        setOpen(false);
        setShowListNames(true)
  
    }

    useEffect(() => {
        console.log(selectItem);
        selectItem !==undefined?
        selectItem.map((item)=>{
            toggleAcitveElement(item.id)
            console.log(item.id);

        }):""

        
    }, [showListNames]); 
    const toggleAcitveElement=(id)=>{
        let items=document.querySelectorAll('.list-item.selected')
            
     
        let item=document.getElementById(id)
        item!== null ?item.classList.add('selected'):""


  }
  
  
    return (
     <div className='dropdwon-menu'>
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
         
            fontSize:`${selection.length>0 ?"18px":""}`,
            color:`${selection.length>0 ?"#EDAA43":""}`
}}>
      
     
          {
    

            selection.length >0 ?(
               selection.length <4?
                selection.map((select, index)=>(
                    (index?' ,':"")+select
                )):selection[0]+" ,"+selection[1]+"..."            
            ):title
          }
         </p> 
        </div>
        {
               open ?  <ul className={`list-items ${showListNames?'hidden':""}`}>
               {/* {itemstype} */}
               <h3 style={{
                   color:'#EDAA43',
                   fontSize:'17px',
                   padding:'5px 10px',
                   height: '62px',
                   marginBottom: '-22px',
                   marginTop:'-10px'
               }}>كل محافظات الكويت</h3>
                {items.map((item)=>(
                    <li className='list-item'  key={item.id}  id={item.id} onClick={(e)=>
                       
                        
                        {      
                            toggleAcitveElement(item.id)
                      
              
                             let selectInfo= {
                               value:item.value,
                               id:item.id
                           }
                       
                           let index=selection.findIndex((el)=>el===item.value)
                           if(index == -1){
                               setSelection(pre=>[...pre,item.value])
                               setSelectItem([...selectItem,selectInfo])


                           }else{
                            // e.target.classList.remove('selected')
                               let newArray=[...selection]
                               newArray.splice(index,1)
                                setSelection(newArray)
                                
                       
                           }
                             
                       

                       
                 
                        
                       }
                    }>{item.value}</li>
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
