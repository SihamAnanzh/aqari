import { createContext, useState } from "react";

export const FilterContext=createContext({
    type_id:'',
    serivce_id:'',
    regions_id:[],
    rent:false,
    serviceResults:[],
    setAddsSResutls:()=>{},
    addsResults:[],
    setSerivceResutls:()=>{},
    setTypeId:()=>{},
    setSerivceId:()=>{},
    setRegionsId: () => { },
    areaName: '',
    typeName: '',
    type:()=>{},
    setRentValue: () => { },
    setAreaStringName: () => { },
    serviceString: '',
    setSrviceString:()=>{}


})


export const FliterProvider=(props)=>{
const [typeId,setTypeId]=useState('')
const [serivceId,setSerivceId]=useState('')
const [regionsId,setRegionsId]=useState([])
const [sResults,setServics]=useState([])
const [aResults,setAdds]=useState([])
const [rent, setRent] = useState()
const [areaName, setAreaName] = useState('')
const[typeName,setTypeName]=useState('')
const[serviceString,setServiceString]=useState('')

    
const setType=(t)=>setTypeId(t)
const setSerivce=(t)=>setSerivceId(t)
const setSResutls=(t)=>setServics(t)
const setAResults=(t)=>setAdds(t)
    const setRegions = (t) => setRegionsId(t)
    const setService = (t) => setServiceString(t)

    const setAreaStringName = (t) => setAreaName(t)
    const Rent = (t) => setRent(t)
const type=(t)=>typeName(t)
const FilterContextValue={
    type_id:typeId,
    serivce_id:serivceId,
    regions_id:regionsId,
    setTypeId:setType,
    setSerivceId:setSerivce,
    setRegionsId:setRegions,
    serviceResults:sResults,
    setSerivceResutls:setSResutls,
    setAddsSResutls:setAResults,
    addsResults:aResults,
    rent: rent,
    areaName: areaName,
    typeName: typeName,
    setAreaStringName,
    RentValue: rent,
    setRentValue:setRent,
    type:setTypeName,
    serviceString: serviceString,
    setSrviceString:setService
    
 
}


return <FilterContext.Provider value={FilterContextValue}>
     {props.children}
    </FilterContext.Provider>
}