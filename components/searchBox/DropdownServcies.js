import React, { useState ,useEffect} from 'react'
import onClickOutside from 'react-onclickoutside';


const DropdownServcies = ({items=[], title, setSelectItem}) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState({});
    const [showListServices, setShowListServices]=useState(true)
    // const toggle = () => setOpen(!open);
    DropdownServcies.handleClickOutside = () => {
        setOpen(false);
        setShowListServices(true)
  
    }

  useEffect(() => {
      selection.id !==undefined ? toggleAcitveElement(selection.id):""
  }, [showListServices]);  
    const toggleAcitveElement=(id)=>{

        let items=document.querySelectorAll('.list-item')

        Array.from(items).map((item)=>{
            item.classList.remove('selected')
        })
        let item=document.getElementById(id)
        item!== null ?item.classList.toggle('selected'):""

  }
 
  
    return (
     <div className='dropdwon-menu'>
        <div className='serach-content' onClick={(e)=>{
         setShowListServices(!showListServices)
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
         
         fontSize:`${selection.value !== undefined ?"18px":""}`,
         color:`${selection.value !== undefined?"#EDAA43":""}`
}} >
      
        {
            selection.value !== undefined?selection.value:title
            
            }
    
          </p> 
        </div>
        {
               open ?  <ul className={`list-items ${showListServices?'hidden':""}`}>
               {/* {itemstype} */}
              
                {items.map((item)=>(
                    <li className='list-item' key={item.id} id={item.id} onClick={()=>
                        {
                            toggleAcitveElement(item.id)

                            let selectInfo= {
                                value:item.value,
                                id:item.id
                            }
                            setSelection(selectInfo)
                            console.log(selectInfo);
                         setSelectItem(selectInfo)
                            }
                    
                    }>{item.value}</li>
                ))}
           </ul>:""
        }
     
   </div>
        
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => DropdownServcies.handleClickOutside,
  };
  

export default  onClickOutside(DropdownServcies,clickOutsideConfig);