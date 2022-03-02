import React , {useState,useEffect} from 'react'
import onClickOutside from 'react-onclickoutside';

const DropdownTypes = ({items=[], title, setSelectItem}) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState({});
    const [showListTypes, setShowListTypes]=useState(true)
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
    color:`${selection.value !== undefined?"#EDAA43":""}`
}} >  {
              
 
    selection.value !== undefined?selection.value:title
}</p> 
<img src='/assets/img/Stroke 1.svg' className='arrow-drop'/>

        </div>
        {
               open ?  <ul className={`list-items ${showListTypes?'hidden':""}`}>
               {/* {itemstype} */}
               <h3 style={{
                   color:'#EDAA43',
                   fontSize:'14px',
                   padding:'5px 15px',
                   height: '52px',
                   marginBottom: '-22px',
                   marginTop:'-10px'
               }}>الكل</h3>
                {items.map((item)=>(
                    <li className='list-item' key={item.id} id={item.id} onClick={(e)=>
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
                    }><span>
                        <img style={{  
                            paddingLeft:'10px'
                        }} src={item.icon}/></span>{item.value}</li>
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
