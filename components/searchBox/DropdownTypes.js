import React , {useState,useEffect,useContext} from 'react'
import onClickOutside from 'react-onclickoutside';
import { FilterContext } from '../../stores/filter';

const DropdownTypes = ({items=[], subTitle,title}) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState({});
    const [showListTypes, setShowListTypes]=useState(true)
    const filterCtx=useContext(FilterContext)
    // const toggle = () => setOpen(!open);
    DropdownTypes.handleClickOutside = () => {
        setOpen(false);
        setShowListTypes(true)
  

        
    }

    useEffect(() => {
        selection.id !==undefined ? toggleAcitveElement(selection.id):""
    }, [showListTypes]);  
      const toggleAcitveElement=(id)=>{
  
          let items=document.querySelectorAll('.list-item')
  
          Array.from(items).map((item)=>{
              item.classList.remove('selected')
          })
          let item=document.getElementById(id)
          item!== null ?item.classList.toggle('selected'):""
  
    }
 
    
    useEffect(() => {


        filterCtx.type(selection.value)
    }, [selection]);

  
    return (
     <div className='dropdwon-menu'>
        <div className='serach-content' onClick={(e)=>{
         setShowListTypes(!showListTypes)
         setOpen(!open)
        //  e.target.nextSibling.classList.toggle('hidden')
          }}>
        <span className='serach-icon' >
                <img src='/assets/img/homSerach.svg' style={{
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
    color:`${selection.value !== undefined?"#00416B":""}`
}} >  {
              
 
    selection.value !== undefined?selection.value:title
}</p> 
<img src='/assets/img/Stroke 1.svg' className='arrow-drop'/>

        </div>
        {
               open ?  <ul className={`list-items dropItem${showListTypes?'hidden':""}`}>
               {/* {itemstype} */}
                    <h3 >{subTitle}</h3>
                {items.map((item)=>(
                    <li className='list-item' key={item.id} id={item.id} onClick={(e)=>
                        {
                            toggleAcitveElement(item.id)
                               setOpen(false)
                            let selectInfo= {
                                value:item.title,
                                id:item.id
                            }
                            setSelection(selectInfo)
                            console.log(selectInfo);
                            filterCtx.setTypeId(item.id)
                      
                       }
                    }><span className='typeImg'>
                        <img  src={item.logo_url}/></span>{item.title}</li>
                ))}
           </ul>:""
        }
     
   </div>
        
   

    );
  }
  
  const clickOutsideConfig = {
    handleClickOutside: () => DropdownTypes.handleClickOutside,
  };
  
export default onClickOutside(DropdownTypes,clickOutsideConfig);
